'use strict'

module.exports = (grunt) ->

	# project configuration
	grunt.initConfig

		# package file containing meta data
		pkg: grunt.file.readJSON 'package.json'

		# create meta data
		meta:
			banner: '/*! <%= pkg.name %> <%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> - ' +
				'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */'

		# compile Stylus module files to CSS
		stylus:
			app:
				option:
					compress: false
					force: true
				files:
					'./htdocs/css/default.css': './htdocs/css/default.styl'

		# install Bower components
		bower:
			install:
				options:
					targetDir: './htdocs/js/vendor/'
					cleanBowerDir: true

		# lint CSS files
		csslint:
			options:
				csslintrc: './.csslintrc'
			files: [
				'./htdocs/css/default.css'
			]

		# lint and hint JS files
		jshint:
			options:
				jshintrc: './.jshintrc'
			beforeconcat: [
				'./htdocs/js/modules/*.js'
			]
			afterconcat: [
				'./htdocs/js/default.js'
			]

		# concatenate files
		concat:
			app:
				src: [
					'./htdocs/js/vendor/min.js/dist/$.js'
					'./htdocs/js/modules/*.js'
				],
				dest: './htdocs/js/default.js'

		# minify the main CSS file
		cssmin:
			app:
				options:
					banner: '<%= meta.banner %>'
				files:
					'./htdocs/css/default.min.css': [
						'./htdocs/css/default.css'
					]

		# minify the main JavaScript file
		uglify:
			options:
				banner: '<%= meta.banner %>'
			app:
				files: {
					'./htdocs/js/modernizr.min.js': [
						'./htdocs/js/vendor/modernizr/modernizr.js'
					]
					'./htdocs/js/default.min.js': [
						'./htdocs/js/default.js'
					]
				}

		# minify images
		imagemin:
			app:
				options:
					optimizationLevel: 3
					progressive: true
				files:
					'./htdocs/assets/img/': './htdocs/assets/img/*.{png,jpg,jpeg}'
		imageEmbed:
			options:
				deleteAfterEncoding: false
			app:
				src: [
					'./htdocs/css/default.min.css'
				]
				dest: './htdocs/css/default.min.css'

		# watch stuff
		watch:
			options:
				livereload: true
			app:
				files: [
					'./htdocs/css/modules/*.styl'
					'./htdocs/js/modules/*.js'
					'./htdocs/inc/*.php'
					'./htdocs/*.php'
				]
				tasks: [
					'default'
				]

	# add additional tasks
	grunt.loadNpmTasks 'grunt-bower-task'
	grunt.loadNpmTasks 'grunt-contrib-stylus'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-contrib-csslint'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	#grunt.loadNpmTasks 'grunt-contrib-imagemin'
	grunt.loadNpmTasks 'grunt-image-embed'

	# install task
	grunt.registerTask 'install', [
		'bower'
		'stylus'
		'concat'
		'uglify'
		'jshint'
		'cssmin'
	]

	# default task
	grunt.registerTask 'default', [
		'stylus'
		'concat'
		'uglify'
		'jshint'
		'cssmin'
	]

	# linting task
	grunt.registerTask 'lint', [
		'jshint'
		'csslint'
	]

	# image optimization task
	grunt.registerTask 'images', [
		#'imagemin'
		'imageEmbed'
	]
