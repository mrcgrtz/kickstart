# Kickstart

This is my **Kickstart** library, now rewritten from scratch with a new file
structure and awesome stuff like Stylus, jQuery, Normalize, Grunt,
some PHP includes, basic search engine optimizations and some inspirations from
HTML5 Boilerplate.

## Initialization

	make

Installs NPM dependencies listed in `package.json` and runs Grunt’s
default task afterwards which is:

	grunt

Default task which does the following sub-tasks:

 - create CSS files from [Stylus](http://learnboost.github.com/stylus/)
   sources
 - concatenate and minify generated CSS files
 - lint generated JS files
 - concatenate and minify generated JS files

## Cleanup generated stuff

To get rid of all generated JS and CSS files and to remove all local NPM
modules, run the following command:

	make clean

## To do

 - get rid of the Makefile, just use `npm install` and `grunt`
 - create proper `watch` and `clean` tasks for Grunt

## License

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
