import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended, // استخدام التكوين الموصى به لـ ESLint
	{
		languageOptions: {
			globals: globals.browser, // السماح بمتغيرات المتصفح العالمية
		},
		rules: {
			// 'no-console': 'error', // منع استخدام console.log
		},
	},
];
