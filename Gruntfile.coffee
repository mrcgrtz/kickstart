module.exports = (grunt) ->

	# project configuration
	grunt.initConfig

		# package file containing meta data
		pkg: grunt.file.readJSON 'package.json'

		# create meta data
		meta:
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'

		# compile Stylus module files to CSS
		stylus:
			app:
				option:
					compress: false
					force: true
				files:
					'./htdocs/css/default.css': './htdocs/css/default.styl'

		# lint and hint JS files
		jshint:
			jshintrc: './.jshintrc'

		# concatenate files
		concat:
			app:
				src: ['./htdocs/js/modules/*.js'],
				dest: './htdocs/js/default.js'

		# minify the main CSS file
		cssmin:
			app:
				options:
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				files:
					'./htdocs/css/default.min.css': [
						'./htdocs/css/default.css'
					]

		# minify the main JavaScript file
		uglify:
			options:
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			app:
				src: './htdocs/js/default.js'
				dest: './htdocs/js/default.min.js'

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
	grunt.loadNpmTasks 'grunt-contrib-stylus'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-contrib-csslint'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	#grunt.loadNpmTasks 'grunt-contrib-imagemin'
	grunt.loadNpmTasks 'grunt-image-embed'

	# default task
	grunt.registerTask 'default', [
		'stylus'
		'concat'
		'uglify'
		'cssmin'
		#'imagemin'
		'imageEmbed'
	]
