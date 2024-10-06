import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  prettier,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist'],
  },
];
