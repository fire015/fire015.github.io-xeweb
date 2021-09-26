<?php

$template = <<<'EOD'
---
author: jason
comments: true
date: %date%
layout: news_item
slug: %slug%
title: "%title%"
categories:
%categories%
---
EOD;

$replace = [];

echo 'Enter post title: ';
$replace['title'] = trim(fgets(STDIN));

echo 'Enter post categories (comma seperated): ';
$replace['categories'] = explode(', ', trim(fgets(STDIN)));
$replace['slug'] = slug($replace['title']);
$replace['date'] = gmdate('Y-m-d H:i:sP');

foreach ($replace as $key => $value) {
    if (is_array($value)) {
        $value = array_map(function ($val) {
            return '- ' . $val;
        }, $value);

        $value = implode(PHP_EOL, $value);
    }

    $template = str_replace('%' . $key . '%', $value, $template);
}

$dir = realpath(__DIR__ . '/../_posts');
$file = $dir . '/' . gmdate('Y-m-d') . '-' . $replace['slug'] . '.html';

if (!file_put_contents($file, $template)) {
    echo 'Failed to write file: ' . $file . PHP_EOL;
} else {
    echo 'File has been created: ' . $file . PHP_EOL;
}

function slug($title, $separator = '-')
{
    // Convert all dashes/underscores into separator
    $flip = $separator == '-' ? '_' : '-';
    $title = preg_replace('![' . preg_quote($flip) . ']+!u', $separator, $title);
    // Remove all characters that are not the separator, letters, numbers, or whitespace.
    $title = preg_replace('![^' . preg_quote($separator) . '\pL\pN\s]+!u', '', strtolower($title));
    // Replace all separator characters and whitespace by a single separator
    $title = preg_replace('![' . preg_quote($separator) . '\s]+!u', $separator, $title);
    return trim($title, $separator);
}