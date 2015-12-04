<?php

$files = glob(__DIR__ . '/_posts/*.html');
$skip = false;

foreach ($files as $file)
{
	$out = '';
	$data = file_get_contents($file);
	$lines = explode("\n", $data);

	foreach ($lines as $line)
	{
		$line = rtrim($line);

		if ($line == '---' || substr($line, 0, 12) == '{% highlight' || $line == '{% endhighlight %}')
		{
			$skip = ($skip === false) ? true : false;
			$out .= $line . "\n";
			continue;
		}

		if ($skip)
		{
			$out .= $line . "\n";
			continue;
		}

		if ($line != '')
		{
			$line = '<p>' . $line . '</p>';
		}

		$out .= $line . "\n";
	}

	$out = preg_replace("/<img[^>]+\>/i", "", $out);
	$out = str_replace('http://www.xeweb.net', '', $out);

	file_put_contents($file, $out);
	echo $file . "\n";
}