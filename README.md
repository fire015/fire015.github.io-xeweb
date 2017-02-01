# XEWeb
The XEWeb blog.

## Installation

```
brew install rbenv ruby-build
rbenv install 2.4.0
rbenv global 2.4.0
eval "$(rbenv init -)"
rbenv exec gem install bundler
rbenv exec bundle install --path vendor/bundle
```

https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
https://gorails.com/setup/osx/10.11-el-capitan

## Running

```
rbenv exec bundle exec jekyll serve -P 8000
```

## Tools
To quickly create a blog post file run:

```
php tools/create-post.php
```