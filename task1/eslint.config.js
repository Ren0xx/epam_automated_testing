import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: { globals: globals.node },
	},
	{
		files: ['**/*.js'],
		ignores: ['node_modules', 'dist', '**/*.conf.js', "**/*.feature"],
	},
	{
		languageOptions: {
			globals: {
				browser: 'readonly',
				$: 'readonly',
				$$: 'readonly',
				expect: 'readonly'
			}
		},
	},
	prettier,
]);
