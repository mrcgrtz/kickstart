const fs = require('fs');
const path = require('path');
const hash = require('hash.js');

// PostCSS plugins
const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssAssets = require('postcss-assets');
const postcssPresetEnv = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const cssnano = require('cssnano');

// Get file with cache buster to become immutable
const immutable = (realFilePath, resolvedFilePath) => {
	const {mtime} = fs.statSync(realFilePath);
	const fileName = path.basename(
		resolvedFilePath,
		path.extname(resolvedFilePath),
	);
	const fileExtension = path.extname(resolvedFilePath);
	const fileHash = hash
		.sha384()
		.update(String(Math.floor(mtime.getTime() / 1000)))
		.digest('hex')
		.slice(0, 8);
	const version = `v_${fileHash}`;
	const directory = path.dirname(resolvedFilePath);
	return `${directory}/${fileName}.${version}${fileExtension}`;
};

/** @type import('postcss-load-config').Config */
const config = {
	plugins: [
		postcssGlobalData({
			files: ['./public/css/src/variables.css'],
		}),
		postcssCustomProperties(),
		postcssAssets({
			basePath: './public',
			loadPaths: ['fonts', 'img'],
			cachebuster: (realFilePath, resolvedFilePath) => ({
				pathname: immutable(realFilePath, resolvedFilePath),
			}),
		}),
		postcssPresetEnv({
			preserve: false,
			autoprefixer: {
				grid: 'no-autoplace',
			},
			features: {
				'focus-visible-pseudo-class': false,
			},
		}),
		postcssFlexbugsFixes(),
		cssnano({
			preset: ['advanced', {reduceIdents: false}],
		}),
	],
};

module.exports = config;
