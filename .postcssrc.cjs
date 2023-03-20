const fs = require('fs');
const path = require('path');
const hash = require('hash.js');

// PostCSS plugins
const postcssAssets = require('postcss-assets');
const postcssPresetEnv = require('postcss-preset-env');
const postcssColorModFunction = require('postcss-color-mod-function');
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
		}),
		postcssColorModFunction({
			transformVars: true,
			importFrom: './public/css/src/variables.css',
		}),
		postcssFlexbugsFixes(),
		cssnano({
			preset: [
				'default',
				{
					autoprefixer: true,
					cssDeclarationSorter: false,
					discardComments: {
						removeAll: true,
					},
					discardUnused: true,
					mergeIdents: true,
					reduceIdents: true,
					zindex: true,
				},
			],
		}),
	],
};

module.exports = config;
