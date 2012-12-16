/*global module:false*/
module.exports = function(grunt) {

	// add additional, non-builtin tasks
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-imagine');

	// project configuration
	grunt.initConfig({

		// package file containing meta data
		pkg: '<json:package.json>',

		// create meta data
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},

		// compile Stylus module files to CSS
		stylus: {
			app: {
				option: {
					compress: false,
					force: true
				},
				files: {
					'./htdocs/css/default.css' : './htdocs/css/default.styl'
				}
			}
		},

		// run tests
		qunit: {},

		// lint and hint JS files
		lint: {
			files: ['./grunt.js', './htdocs/js/default.js']
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
				$: true,
				google: true,
				console: true
			}
		},

		// concatenate files
		concat: {
			app: {
				src: ['./htdocs/js/modules/*.js'],
				dest: './htdocs/js/default.js'
			}
		},

		// minify the main CSS file
		mincss: {
			app: {
				files: {
					'./htdocs/css/default.min.css': ['<meta:banner>', './htdocs/css/default.css']
				}
			}
		},

		// minify the main JavaScript file
		min: {
			app: {
				src: ['<meta:banner>', './htdocs/js/default.js'],
				dest: './htdocs/js/default.min.js'
			}
		},

		// minify images
		pngmin: {
			src: [
				'./htdocs/assets/img/**/*.png'
			],
			dest: './htdocs'
		},
		jpgmin: {
			src: [
				'./htdocs/assets/img/**/*.jpg'
			],
			dest: './htdocs'
		},
		gifmin: {
			src: [
				'./htdocs/assets/img/**/*.gif'
			],
			dest: './htdocs'
		},

		// create data URI images
		inlineImg: {
			src: ['./htdocs/css/default.min.css'],
			ie8: true // remove this?
		},


		// watch stuff
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint'
		}

	});

	// default task
	grunt.registerTask('default', 'stylus concat min mincss pngmin jpgmin gifmin inlineImg');

};
