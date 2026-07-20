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
];

export default config;
