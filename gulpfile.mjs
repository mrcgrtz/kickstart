import {glob} from 'node:fs/promises';
import gulp from 'gulp';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import esbuild from 'esbuild';
import browserslistToEsbuild from 'browserslist-to-esbuild';
// PostCSS configuration
import postcssConfig from './.postcssrc.mjs';

// Browsers to support, derived from the shared Browserslist config
const target = browserslistToEsbuild();

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

// Transform and bundle TypeScript modules into feel.js using esbuild.
// esbuild emits one output per entry point, so to concatenate many modules
// into one bundle (as Browserify did) we feed a virtual entry that imports
// each module for its side effects.
gulp.task('js', async () => {
	const modules = await Array.fromAsync(glob('public/js/src/**/*.ts'));
	await esbuild.build({
		stdin: {
			contents: modules
				// Sort for a deterministic bundle order (glob() order is not guaranteed)
				.toSorted((moduleA, moduleB) => moduleA.localeCompare(moduleB))
				.map((module) => `import ${JSON.stringify(`./${module}`)};`)
				.join('\n'),
			resolveDir: import.meta.dirname,
			loader: 'js',
		},
		bundle: true,
		format: 'iife',
		platform: 'browser',
		target,
		minify: true,
		sourcemap: true,
		outfile: './public/js/feel.js',
	});
});

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
