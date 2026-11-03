/**
 * @see https://github.com/xojs/xo#config
 * @type {import('xo').FlatXoConfig}
 */
const config = [
	{
		prettier: true,
	},
	{
		files: '**/*.?(m)[jt]s',
		rules: {
			'jsdoc/imports-as-dependencies': 'off',
			'jsdoc/require-asterisk-prefix': ['error', 'always'],
		},
	},
	{
		files: '**/*.css',
		rules: {
			'css/no-invalid-at-rule-placement': 'off',
		},
	},
];

export default config;
