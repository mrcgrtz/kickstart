/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
const config = {
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-use-logical'],
	languageOptions: {
		syntax: {
			properties: {
				'background-image': '[ <bg-image> | <--custom-functions> ]#',
			},
			types: {
				'--custom-functions':
					'resolve( <string> ) | inline( <string> )',
			},
		},
	},
	rules: {
		'color-named': 'never',
		'csstools/use-logical': ['always', {except: ['float']}],
		'function-url-quotes': ['always', {except: ['empty']}],
		'no-descending-specificity': null,
	},
};

export default config;
