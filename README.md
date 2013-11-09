# Kickstart

This is my **Kickstart** library, now rewritten from scratch with a new
file structure and awesome stuff like Stylus, Grunt, Bower, some PHP
includes, basic search engine optimizations and some inspirations from
HTML5 Boilerplate and Normalize.

## Installation

	npm install && grunt install

Installs NPM dependencies listed in `package.json` and runs Grunt’s
install task afterwards.

The Grunt default task (`grunt`) does the following sub-tasks:

 - create CSS files from [Stylus](http://learnboost.github.com/stylus/)
   sources
 - concatenate and minify generated CSS files
 - lint JS files
 - concatenate and minify generated JS files
 - create a custom Modernizr build based on generated CSS and JS files

## Additional Grunt tasks

### Watch and live-reload stuff

To automatically run the Grunt default task and refresh the browser
after changing a file, start the watch task:

	grunt watch

You need a [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
for live reloading the page, of course.

### Beautify JavaScript code

For beautifying the JavaScript code in your modules according to my
personal [Coding Style Guide](https://github.com/Dreamseer/styleguide),
run this Grunt task:

	grunt beautify

### Compress and embed images

For compressing your images and embedding them in your CSS file, run
this Grunt task:

	grunt images

Embedding images is a separate task since mobile browsers seem to be
[slower](https://www.mobify.com/blog/data-uris-are-slow-on-mobile/)
when parsing Base64 sequences.

Note: Compressing images has been disabled temporarily. It is on my
roadmap for Kickstart 2.6.0.

## Roadmap

 * 2.6.0: Add support for image compression with grunt-contrib-imagemin.
 * 2.7.0: Add support for AMD with grunt-contrib-requirejs.
 * 2.8.0: Change Gruntfile to plain JavaScript to get rid of CoffeeScript
   in all places. Modularize Grunt tasks. 
 * 3.0.0: Change Kickstart to a Yeoman generator.

## License

Copyright (c) 2011–2013 Marc Görtz, http://marcgoertz.de/

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
“Software”), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
