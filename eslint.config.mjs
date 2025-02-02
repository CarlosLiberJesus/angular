// filepath: /home/bewhy/server/angular/eslint.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import angularEslintTemplateParser from '@angular-eslint/template-parser';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import postcssScss from 'postcss-scss';
import stylelintPlugin from 'stylelint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './frontend/tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.html', '.scss'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@angular-eslint/no-empty-lifecycle-method': 'off',
      '@angular-eslint/no-input-rename': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularEslintTemplateParser,
      parserOptions: {
        project: './frontend/tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@angular-eslint/template': angularEslintTemplateParser,
    },
    rules: {
      // Add specific rules for HTML files if needed
    },
  },
];
