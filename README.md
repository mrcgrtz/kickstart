# <img src="https://cdn.rawgit.com/Dreamseer/kickstart/master/htdocs/assets/img/kickstart.svg" alt="Kickstart" width="300" height="83">

> **Kickstart** is my opinionated starter kit for frontend development.

[![GitHub tag](https://img.shields.io/github/tag/dreamseer/kickstart.svg?maxAge=2592000)]()
[![Dependency state](https://img.shields.io/david/dev/dreamseer/kickstart.svg?maxAge=2592000)]()
[![MIT License](https://img.shields.io/github/license/dreamseer/kickstart.svg?maxAge=2592000)]()

## Features

* build process using [Grunt](http://gruntjs.com/)
* CSS optimizations using [PostCSS](http://postcss.org)
* JavaScript modules using [require.js](http://www.requirejs.org/)
* latest [jQuery](https://jquery.com/) and [PEP](https://github.com/jquery/PEP)
* some inspirations from [HTML5 Boilerplate](https://html5boilerplate.com)
* minimalistic [Normalize](https://necolas.github.io/normalize.css/) for good
  default styling
* some optimized PHP includes
* basic search engine optimization

## Requirements

* [Yarn](https://yarnpkg.com/)
* [grunt-cli](http://gruntjs.com/)

## Installation

```
yarn && grunt
```

Installs all dependencies listed in `package.json` and runs Grunt’s
default task afterwards.

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

You need a [LiveReload browser extension](http://livereload.com/extensions/)
for live reloading the page, of course.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
