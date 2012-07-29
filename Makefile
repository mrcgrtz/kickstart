install:
	npm install
	./node_modules/grunt/bin/grunt

watch:
	./node_modules/stylus/bin/stylus -w -c -u ./node_modules/nib/lib/nib ./css < ./css/default.styl

clean:
	rm -rf node_modules
	rm -f css/modules/*.css
	rm -f css/*.css
	rm -f js/modules/*.js
	rm -f js/*.js
