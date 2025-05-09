import tseslint from 'typescript-eslint';

import javascript from './javascript.mjs';
import plugins from './plugins.mjs';
import tsRules from './rules/typescript.mjs';

export default {
  ...javascript,
  languageOptions: {
    ...javascript.languageOptions,
    parser: tseslint.parser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
  plugins: {
    ...plugins,
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...tsRules,
    ...javascript.rules,
  },
};
