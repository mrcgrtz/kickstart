# <img src="https://cdn.rawgit.com/mrcgrtz/kickstart/main/public/img/kickstart.svg" alt="Kickstart" width="300" height="83">

> **Kickstart** is my opinionated starter kit for frontend development.

![GitHub tag](https://img.shields.io/github/tag/mrcgrtz/kickstart.svg?maxAge=2592000)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Types](https://img.shields.io/badge/types-TypeScript-blue)](https://www.typescriptlang.org/)
![MIT License](https://img.shields.io/github/license/mrcgrtz/kickstart.svg?maxAge=2592000)

## Features

- build process using [Gulp](https://gulpjs.com/)
- CSS optimizations using [PostCSS](https://postcss.org/)
- TypeScript module transpiling with [Browserify](https://browserify.org/)
- some inspirations from [HTML5 Boilerplate](https://html5boilerplate.com)
- minimalistic [Normalize](https://necolas.github.io/normalize.css/) for good
  default styling
- some optimized PHP includes
- basic search engine optimization

## Requirements

- [gulp-cli](https://gulpjs.com/)

## Installation

```bash
npm install && gulp
```

Installs all dependencies listed in `package.json` and runs
Gulp’s default task afterwards.

## Scripts

### Build assets

The default Gulp task using `gulp` builds CSS/JS files from their sources. CSS files get transformed using PostCSS while TypeScript files get compiled using Browserify.

```bash
gulp
```

### Watch changes

To automatically run the Gulp default task after changing a file, start the watch task:

```bash
gulp watch
```

### Run tests

There are no actual unit or integration tests (yet). Testing currently includes linting the CSS source files using [Stylelint](https://stylelint.io/) and linting the TypeScript source files using [XO](https://github.com/xojs/xo):

```bash
npm test
```

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
