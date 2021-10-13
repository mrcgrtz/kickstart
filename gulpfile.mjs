import fs from 'node:fs';
import path from 'node:path';

// Gulp and its plugins
import gulp from 'gulp';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import xo from 'gulp-xo';
import babel from 'gulp-babel';
import modernizr from 'gulp-modernizr-build';
import terser from 'gulp-terser';
import sourcemaps from 'gulp-sourcemaps';
import hash from 'hash.js';

// PostCSS modules
import stylelint from 'stylelint';
import postcssReporter from 'postcss-reporter';
import postcssAssets from 'postcss-assets';
import postcssPresetEnv from 'postcss-preset-env';
import postcssColorRgb from 'postcss-color-rgb';
import postcssColorModFunction from 'postcss-color-mod-function';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import cssnano from 'cssnano';

// Get file with cache buster to become immutable
const immutable = (realFilePath, resolvedFilePath) => {
	const {mtime} = fs.statSync(realFilePath);
	const fileHash = hash.sha384().update(String(mtime.getTime() / 1000)).digest('hex').slice(0, 8);
	return `${path.dirname(resolvedFilePath)}/${path.basename(resolvedFilePath, path.extname(resolvedFilePath))}.v_${fileHash}${path.extname(resolvedFilePath)}`;
};

// Lint CSS modules
gulp.task('css:lint', () => gulp
	.src('./public/css/src/**/*.css')
	.pipe(postcss([
		stylelint(),
		postcssReporter({
			clearMessages: true
		})
	]))
);

// Concatenate CSS modules and transform them using PostCSS
gulp.task('css', gulp.series('css:lint', () => gulp
	.src([
		'./public/css/src/variables.css',
		'./public/css/src/layout.css',
		'./public/css/src/typography.css',
		'./public/css/src/links.css',
		'./public/css/src/buttons.css',
		'./public/css/src/header.css',
		'./public/css/src/footer.css',
		'./public/css/src/navigation.css',
		'./public/css/src/headlines.css',
		'./public/css/src/lists.css',
		'./public/css/src/tables.css',
		'./public/css/src/forms.css',
		'./public/css/src/figures.css',
		'./public/css/src/images.css',
		'./public/css/src/abbreviations.css',
		'./public/css/src/code.css',
		'./public/css/src/quotes.css',
		'./public/css/src/hidden-elements.css',
		'./public/css/src/selection.css'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('look.css'))
	.pipe(postcss([
		postcssAssets({
			basePath: './public',
			loadPaths: ['fonts', 'img'],
			cachebuster: (realFilePath, resolvedFilePath) => ({
				pathname: immutable(realFilePath, resolvedFilePath)
			})
		}),
		postcssPresetEnv({
			preserve: false,
			autoprefixer: {
				grid: 'no-autoplace'
			}
		}),
		postcssColorRgb(),
		postcssColorModFunction(),
		postcssFlexbugsFixes(),
		cssnano({
			autoprefixer: true,
			discardUnused: true,
			mergeIdents: true,
			zindex: true
		})
	]))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./public/css/'))
));

// Lint JS modules
gulp.task('js:lint', () => gulp
	.src([
		'./gulpfile.mjs',
		'./public/js/src/**/*.js'
	])
	.pipe(xo())
	.pipe(xo.format())
	.pipe(xo.failAfterError())
);

// Transform JS modules
gulp.task('js', gulp.series('js:lint', () => gulp
	.src([
		'./public/js/src/**/*.js'
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
	.pipe(gulp.dest('./public/js/'))
));

// Create custom Modernizr build
gulp.task('modernizr', () => gulp
	.src([
		'./public/js/src/**/*.js',
		'./public/css/src/**/*.css'
	])
	.pipe(modernizr('modernizr.js'))
	.pipe(terser())
	.pipe(gulp.dest('./public/js/'))
);

// Watch stuff
gulp.task('watch', () => gulp
	.watch([
		'./public/css/src/*.css',
		'./public/js/src/*.js',
		'./public/**/*.php',
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
