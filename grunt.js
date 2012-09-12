/*global module:false*/
module.exports = function(grunt) {

	// Add additional, non-builtin tasks
	grunt.loadNpmTasks('grunt-contrib');

	// Project configuration
	grunt.initConfig({

		// Package file containing meta data
		pkg: '<json:package.json>',

		// Create meta data
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},

		// Compile Stylus module files to CSS
		stylus: {
			compile: {
				option: {
					compress: false,
					force: true
				},
				files: {
					'./css/default.css' : './css/default.styl'
				}
			}
		},

		// Run tests
		qunit: {},

		// Compile Coffeescript module files to JS
		coffee: {
			app: {
				files: {
					'./js/default.js': './js/modules/*.coffee'
				},
				options: {
					bare: false
				}
			}
		},

		// Lint and hint JS files
		lint: {
			files: ['./grunt.js', './js/default.js']
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				//immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				google: true
			}
		},

		// Concatenate files
		concat: {},

		// Minify the main CSS file
		mincss: {
			compress: {
				files: {
					'css/default.min.css': ['<banner:meta.banner>', './css/default.css']
				}
			}
		},

		// Concatenate and minify jQuery and the main JS file
		min: {
			dist: {
				src: ['<banner:meta.banner>', './js/default.js'],
				dest: './js/default.min.js'
			}
		},

		// Watch stuff
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint'
		}

	});

	// Default task
	grunt.registerTask('default', 'stylus coffee lint min mincss');

};
