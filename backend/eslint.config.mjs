import eslint from '@eslint/js';
import tsLint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tsLint.config({
	languageOptions: {
		parserOptions: {
			ecmaVersion: 2021,
			project: 'tsconfig.json',
			tsconfigRootDir: import.meta.dirname,
			sourceType: 'module',
		},
	},
	ignores: ['scripts/addHeader.js'],
	extends: [eslint.configs.recommended, ...tsLint.configs.recommended, prettierConfig],
});
