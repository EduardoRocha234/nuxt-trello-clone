/** @type {import("prettier").Config} */
module.exports = {
	tabWidth: 2,
	printWidth: 80,
	singleQuote: true,
	semi: false,
	vueIndentScriptAndStyle: true,
	endOfLine: 'crlf',
	arrowParens: 'always',
	singleAttributePerLine: true,
	useTabs: true,
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
}
