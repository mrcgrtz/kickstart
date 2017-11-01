/* eslint one-var: "off", global-require: "off" */
const gulp = require("gulp");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const eslint = require("gulp-eslint");
const requirejsOptimize = require("gulp-requirejs-optimize");
const modernizr = require("gulp-modernizr-build");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

// lint CSS modules
gulp.task("css:lint", () => gulp
	.src("./htdocs/css/src/**/*.css")
	.pipe(postcss([
		require("stylelint")(),
		require("postcss-reporter")({
			clearMessages: true
		})
	]))
);

// concatenate CSS modules and transform them using PostCSS
gulp.task("css", [ "css:lint" ], () => gulp
	.src([
		"./htdocs/css/src/variables.css",
		"./htdocs/css/src/layout.css",
		"./htdocs/css/src/typography.css",
		"./htdocs/css/src/links.css",
		"./htdocs/css/src/buttons.css",
		"./htdocs/css/src/header.css",
		"./htdocs/css/src/footer.css",
		"./htdocs/css/src/navigation.css",
		"./htdocs/css/src/headlines.css",
		"./htdocs/css/src/lists.css",
		"./htdocs/css/src/tables.css",
		"./htdocs/css/src/forms.css",
		"./htdocs/css/src/figures.css",
		"./htdocs/css/src/images.css",
		"./htdocs/css/src/audio-video.css",
		"./htdocs/css/src/abbreviations.css",
		"./htdocs/css/src/code.css",
		"./htdocs/css/src/quotes.css",
		"./htdocs/css/src/browser-update.css",
		"./htdocs/css/src/hidden-elements.css",
		"./htdocs/css/src/selection.css"
	])
	.pipe(sourcemaps.init())
	.pipe(concat("look.css"))
	.pipe(postcss([
		require("postcss-assets")({
			basePath:  "./htdocs/",
			loadPaths: [ "./htdocs/assets/" ],
			relative:  true
		}),
		require("postcss-cssnext")({
			browsers:          "last 2 versions",
			warnForDuplicates: false
		}),
		require("postcss-flexbugs-fixes")(),
		require("cssnano")()
	]))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./htdocs/css/"))
);

// lint JS modules
gulp.task("js:lint", () => gulp
	.src([
		"./gulpfile.js",
		"./htdocs/js/main.js",
		"./htdocs/js/src/**/*.js"
	])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
);

// compile JS modules and uglify them
gulp.task("js", [ "js:lint" ], () => gulp
	.src("./htdocs/js/main.js")
	.pipe(sourcemaps.init())
	.pipe(requirejsOptimize({
		name:                    "main",
		baseUrl:                 "./htdocs/js",
		out:                     "feel.js",
		optimize:                "uglify2",
		locale:                  "de-de",
		logLevel:                0,
		inlineText:              true,
		useStrict:               true,
		generateSourceMaps:      true,
		preserveLicenseComments: false,
		include:                 [
			"../../node_modules/requirejs/require"
		],
		paths:                   {
			jquery: "../../node_modules/jquery/dist/jquery",
			pep:    "../../node_modules/pepjs/dist/pep"
		},
		wrap:                    {
			start: "(function() {",
			end:   "$.noConflict(true); }());"
		}
	}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./htdocs/js/"))
);

// create custom Modernizr build
gulp.task("modernizr", () => gulp
	.src([
		"./htdocs/js/src/**/*.js",
		"./htdocs/css/src/**/*.css"
	])
	.pipe(modernizr("modernizr.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./htdocs/js/"))
)

// watch stuff
gulp.task("watch", () => gulp
	.watch([
		"./htdocs/css/src/*.css",
		"./htdocs/js/src/*.js",
		"./htdocs/js/main.js",
		"./htdocs/**/*.php",
		"./gulpfile.js"
	], [
		"default"
	])
);

gulp.task("default", [
	"css",
	"js",
	"modernizr"
]);

gulp.task("lint", [
	"css:lint",
	"js:lint"
]);
