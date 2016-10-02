/* globals module, require */
module.exports = function(grunt) {

	"use strict";

	// project configuration
	grunt.initConfig({

		// package file containing meta data
		pkg: grunt.file.readJSON("package.json"),

		concat: {
			options: {
				sourceMap:      true,
				sourceMapStyle: "inline"
			},
			dist:    {
				src:  [
					"./htdocs/css/src/variables.css",
					"./htdocs/css/src/layout.css",
					"./htdocs/css/src/typography.css",
					"./htdocs/css/src/links.css",
					"./htdocs/css/src/buttons.css",
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
				],
				dest: "./htdocs/css/look.css"
			}
		},

		postcss: {
			lint: {
				options: {
					processors: [
						require("stylelint")(),
						require("postcss-reporter")({
							clearMessages: true
						})
					]
				},
				src: "./htdocs/css/src/*.css"
			},
			dist:    {
				options: {
					map:        {
						inline:     false,
						annotation: "./htdocs/css"
					},
					processors: [
						/* eslint global-require: "off"*/
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
					]
				},
				src:  "./htdocs/css/look.css",
				dest: "./htdocs/css/look.css"
			}
		},

		// lint JS modules
		eslint: {
			target: [
				"./htdocs/js/src/*.js"
			]
		},

		// install Bower components
		bower: {
			install: {
				options: {
					targetDir:     "./htdocs/js/vendor/",
					cleanBowerDir: true
				}
			}
		},

		// compile JS modules and uglify them
		requirejs: {
			dist: {
				options: {
					name:                    "main",
					baseUrl:                 "./htdocs/js",
					out:                     "./htdocs/js/feel.js",
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
						jquery: "vendor/jquery/jquery",
						pep:    "vendor/pepjs/pep"
					},
					wrap:                    {
						start: "(function() {",
						end:   "$.noConflict(true); }());"
					}
				}
			}
		},

		// create custom Modernizr build
		modernizr: {
			dist: {
				crawl:       true,
				uglify:      true,
				tests:       [],
				customTests: [],
				dest:        "./htdocs/js/modernizr.js",
				files:       {
					src: [
						"./htdocs/css/look.css",
						"./htdocs/js/src/*.js"
					]
				},
				options:     [
					"html5shiv",
					"setClasses"
				]
			}
		},

		// watch stuff
		watch: {
			options: {
				livereload: true
			},
			dist: {
				files: [
					"./htdocs/css/src/*.css",
					"./htdocs/js/src/*.js",
					"./htdocs/js/main.js",
					"./htdocs/**/*.php",
					"./Gruntfile.js"
				],
				tasks: [
					"default"
				]
			}
		}

	});

	// add additional tasks
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks("grunt-postcss");
	grunt.loadNpmTasks("grunt-eslint");

	// default task
	grunt.registerTask("default", [
		"concat",
		"postcss",
		"eslint",
		"requirejs",
		"modernizr"
	]);

	// install task
	grunt.registerTask("install", [
		"bower",
		"concat",
		"postcss",
		"eslint",
		"requirejs",
		"modernizr"
	]);

	// liniting task
	grunt.registerTask("lint", [
		"postcss:lint",
		"eslint"
	]);

};
