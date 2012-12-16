install:
	npm install
	./node_modules/grunt/bin/grunt

watch:
	./node_modules/stylus/bin/stylus -w -c -u ./node_modules/nib/lib/nib ./htdocs/css < ./htdocs/css/default.styl

clean:
	rm -rf node_modules
	rm -f ./htdocs/css/modules/*.css
	rm -f ./htdocs/css/*.css
	rm -f ./htdocs/js/*.js
