import gulp from 'gulp';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import browserify from 'browserify';
import tsify from 'tsify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import {glob} from 'tinyglobby';
import through from 'through2';
// PostCSS configuration
import postcssConfig from './.postcssrc.mjs';

// Concatenate CSS modules and transform them using PostCSS
gulp.task('css', () =>
	gulp
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
			'./public/css/src/selection.css',
		])
		.pipe(sourcemaps.init())
		.pipe(concat('look.css'))
		.pipe(postcss(postcssConfig.plugins))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public/css/')),
);

// Transform JS modules
gulp.task('js:build', async () => {
	const bundledStream = through();
	bundledStream
		.pipe(source('feel.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./public/js/'));

	try {
		const entries = await glob(['./public/js/src/**/*.ts']);
		const b = browserify({
			entries,
			basedir: '.',
			debug: true,
			cache: {},
			packageCache: {},
		});
		b.plugin(tsify)
			.transform('babelify', {
				presets: ['@babel/preset-env'],
				extensions: ['.ts'],
			})
			.bundle()
			.pipe(bundledStream);
	} catch (error) {
		bundledStream.emit('error', error);
	}

	return bundledStream;
});

// Minify JS modules
gulp.task('js:minify', () =>
	gulp
		.src(['./public/js/feel.js'])
		.pipe(
			sourcemaps.init({
				loadMaps: true,
			}),
		)
		.pipe(
			terser({
				sourceMap: true,
			}),
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public/js/')),
);

// Build and minify JS modules
gulp.task('js', gulp.series('js:build', 'js:minify'));

// Watch stuff
gulp.task('watch', () =>
	gulp.watch(
		[
			'./public/css/src/*.css',
			'./public/js/src/*.ts',
			'./public/**/*.php',
			'./gulpfile.mjs',
		],
		() => {
			gulp.parallel('default');
		},
	),
);

gulp.task('default', gulp.parallel('css', 'js'));
