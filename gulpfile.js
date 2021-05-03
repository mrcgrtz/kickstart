const fs = require('fs');
const path = require('path');

// Gulp and its plugins
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const xo = require('gulp-xo');
const babel = require('gulp-babel');
const modernizr = require('gulp-modernizr-build');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const hash = require('hash.js');

// Get file with cache buster to become immutable
const immutable = (realFilePath, resolvedFilePath) => {
	const {mtime} = fs.statSync(realFilePath);
	const fileHash = hash.sha384().update(String(mtime.getTime() / 1000)).digest('hex').slice(0, 8);
	return `${path.dirname(resolvedFilePath)}/${path.basename(resolvedFilePath, path.extname(resolvedFilePath))}.v_${fileHash}${path.extname(resolvedFilePath)}`;
};

// Lint CSS modules
gulp.task('css:lint', () => gulp
	.src('./htdocs/css/src/**/*.css')
	.pipe(postcss([
		require('stylelint')(),
		require('postcss-reporter')({
			clearMessages: true
		})
	]))
);

// Concatenate CSS modules and transform them using PostCSS
gulp.task('css', gulp.series('css:lint', () => gulp
	.src([
		'./htdocs/css/src/variables.css',
		'./htdocs/css/src/layout.css',
		'./htdocs/css/src/typography.css',
		'./htdocs/css/src/links.css',
		'./htdocs/css/src/buttons.css',
		'./htdocs/css/src/header.css',
		'./htdocs/css/src/footer.css',
		'./htdocs/css/src/navigation.css',
		'./htdocs/css/src/headlines.css',
		'./htdocs/css/src/lists.css',
		'./htdocs/css/src/tables.css',
		'./htdocs/css/src/forms.css',
		'./htdocs/css/src/figures.css',
		'./htdocs/css/src/images.css',
		'./htdocs/css/src/audio-video.css',
		'./htdocs/css/src/abbreviations.css',
		'./htdocs/css/src/code.css',
		'./htdocs/css/src/quotes.css',
		'./htdocs/css/src/browser-update.css',
		'./htdocs/css/src/hidden-elements.css',
		'./htdocs/css/src/selection.css'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('look.css'))
	.pipe(postcss([
		require('postcss-assets')({
			basePath: './htdocs',
			loadPaths: ['fonts', 'img'],
			cachebuster: (realFilePath, resolvedFilePath) => ({
				pathname: immutable(realFilePath, resolvedFilePath)
			})
		}),
		require('postcss-preset-env')({
			preserve: false,
			autoprefixer: {
				grid: 'no-autoplace'
			}
		}),
		require('postcss-color-rgb')(),
		require('postcss-color-mod-function')(),
		require('postcss-flexbugs-fixes')(),
		require('cssnano')({
			autoprefixer: true,
			discardUnused: true,
			mergeIdents: true,
			zindex: true
		})
	]))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./htdocs/css/'))
));

// Lint JS modules
gulp.task('js:lint', () => gulp
	.src([
		'./gulpfile.js',
		'./htdocs/js/src/**/*.js'
	])
	.pipe(xo())
	.pipe(xo.format())
	.pipe(xo.failAfterError())
);

// Transform JS modules
gulp.task('js', gulp.series('js:lint', () => gulp
	.src([
		'./htdocs/js/src/**/*.js'
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: [
			'@babel/preset-env',
			'@babel/preset-flow'
		]
	}))
	.pipe(concat('feel.js'))
	.pipe(terser())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./htdocs/js/'))
));

// Create custom Modernizr build
gulp.task('modernizr', () => gulp
	.src([
		'./htdocs/js/src/**/*.js',
		'./htdocs/css/src/**/*.css'
	])
	.pipe(modernizr('modernizr.js'))
	.pipe(terser())
	.pipe(gulp.dest('./htdocs/js/'))
);

// Watch stuff
gulp.task('watch', () => gulp
	.watch([
		'./htdocs/css/src/*.css',
		'./htdocs/js/src/*.js',
		'./htdocs/**/*.php',
		'./gulpfile.js'
	], () => {
		gulp.parallel('default');
	})
);

gulp.task('default', gulp.parallel(
	'css',
	'js',
	'modernizr'
));

gulp.task('lint', gulp.parallel(
	'css:lint',
	'js:lint'
));
