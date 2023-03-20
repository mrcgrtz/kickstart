/** @type {import('stylelint').Config} */
module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		'at-rule-no-vendor-prefix': true,
		'color-named': 'never',
		'font-family-name-quotes': 'always-where-recommended',
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: [
					'/^resolve$|^inline$/',
					'color-mod',
					'/^red$|^green$|^blue$|^a(?:lpha)?$|^rgb$|^h(?:ue)?$|^s(?:aturation)?$|^l(?:ightness)?$|^w(?:hiteness)?$|^b(?:lackness)?$|^tint$|^shade$|^blenda?$|^contrast$/',
				],
			},
		],
		'function-url-quotes': [
			'always',
			{
				except: ['empty'],
			},
		],
		'media-feature-name-no-vendor-prefix': true,
		'no-descending-specificity': null,
		'selector-attribute-quotes': 'always',
		'selector-no-vendor-prefix': true,
	},
};
