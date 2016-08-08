# Kickstart

This is my **Kickstart** toolset consisting of awesome stuff like
[Grunt](http://gruntjs.com/),
[PostCSS](http://postcss.org),
[require.js](http://www.requirejs.org/),
[jQuery](https://jquery.com/),
some PHP includes, basic search engine optimizations and some inspirations from
[HTML5 Boilerplate](https://html5boilerplate.com) and
[Normalize](https://necolas.github.io/normalize.css/).

## Requirements

* [Node](https://nodejs.org/en/) with npm
* [grunt-cli](http://gruntjs.com/)

## Installation

```
npm install && grunt install
```

Installs NPM dependencies listed in `package.json` and runs Grunt’s
installation task afterwards.

## Grunt tasks

### Default task

The default Grunt task using `grunt` lints and builds CSS/JS files from their
sources. CSS files are linted using Stylelint and transformed using PostCSS
while JS files are linted using ESLint on their AMD-based source files which get
compiled using r.js.

### Watch and live-reload stuff

To automatically run the Grunt default task and refresh the browser
after changing a file, start the watch task:

```
grunt watch
```

You need a [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
for live reloading the page, of course.

## License

Copyright (c) 2011–2016 Marc Görtz <https://marcgoertz.de/>

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
