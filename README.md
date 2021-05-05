# <img src="https://cdn.rawgit.com/Dreamseer/kickstart/master/htdocs/img/kickstart.svg" alt="Kickstart" width="300" height="83">

> **Kickstart** is my opinionated starter kit for frontend development.

[![GitHub tag](https://img.shields.io/github/tag/dreamseer/kickstart.svg?maxAge=2592000)]()
[![Dependency state](https://img.shields.io/david/dev/dreamseer/kickstart.svg?maxAge=2592000)]()
[![MIT License](https://img.shields.io/github/license/dreamseer/kickstart.svg?maxAge=2592000)]()

## Features

* build process using [Gulp](https://gulpjs.com/)
* CSS optimizations using [PostCSS](https://postcss.org/)
* JavaScript modules using [Babel](https://babeljs.io) and [Flow](https://flow.org/)
* some inspirations from [HTML5 Boilerplate](https://html5boilerplate.com)
* minimalistic [Normalize](https://necolas.github.io/normalize.css/) for good
  default styling
* some optimized PHP includes
* basic search engine optimization

## Requirements

* [gulp-cli](https://gulpjs.com/)

## Installation

```bash
npm install && gulp
```

Installs all dependencies listed in `package.json` and runs
Gulp’s default task afterwards.

## Gulp tasks

### Default task

The default Gulp task using `gulp` lints and builds CSS/JS
files from their sources. CSS files are linted using Stylelint
and transformed using PostCSS while JS files are linted using
XO on their source files which get compiled using Flow and
Babel.

### Watch changes

To automatically run the Gulp default task after changing a
file, start the watch task:

```bash
gulp watch
```

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
