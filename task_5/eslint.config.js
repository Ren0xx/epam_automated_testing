import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				expect: 'readonly',
				it: 'readonly',
				beforeAll: 'readonly',
				describe: 'readonly',
				test: 'readonly',
				afterAll: 'readonly',
			},
		},
		rules: js.configs.recommended.rules,
	},
	prettier,
]);
