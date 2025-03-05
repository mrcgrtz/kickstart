/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
const config = {
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-use-logical'],
	rules: {
		'color-named': 'never',
		'csstools/use-logical': ['always', {except: ['float']}],
		'declaration-property-value-no-unknown': [
			true,
			{
				propertiesSyntax: {
					'background-image':
						'[ <bg-image> | <--custom-functions> ]#',
				},
				typesSyntax: {
					'--custom-functions':
						'resolve( <string> ) | inline( <string> )',
				},
			},
		],
		'function-url-quotes': ['always', {except: ['empty']}],
		'no-descending-specificity': null,
	},
};

export default config;
