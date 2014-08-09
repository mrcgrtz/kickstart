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

 - create and minify CSS files from
   [Stylus](http://learnboost.github.com/stylus/) sources
 - create and minify JS files from AMD-based
   [require.js](http://requirejs.org/) modules
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

Note: For using
[grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim),
[ImageOptim](http://imageoptim.com/) and
[ImageAlpha](http://pngmini.com/) are required. If don’t have these apps
installed, remove that sub-task from the `images` task.

## Roadmap

 * 2.8.0: Optimizations.
 * 2.9.0: Styleguide implementation.
 * 2.10.0: Modularize Grunt tasks.
 * 3.0.0: Change Kickstart to either a Yeoman generator or a grunt-init
   task.

## License

Copyright (c) 2011–2014 Marc Görtz, http://marcgoertz.de/

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
