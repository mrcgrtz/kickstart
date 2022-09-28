/** @type {Record<string, string | string[] | Promise<string | string[]>} */
export default {
	'*.?({c,m}){j,t}s?(x)': 'xo --fix',
	'*.css': 'stylelint --fix'
};
