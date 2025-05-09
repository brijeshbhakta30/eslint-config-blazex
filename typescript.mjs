import tseslint from 'typescript-eslint';

import javascript from './javascript.mjs';
import plugins from './plugins.mjs';
import baseRules from './rules/base.mjs';
import perfectionistRules from './rules/perfectionist.mjs';
import sonarRules from './rules/sonar.mjs';
import tsRules from './rules/typescript.mjs';
import unicornRules from './rules/unicorn.mjs';

export default {
  languageOptions: {
    ...javascript.languageOptions,
    parser: tseslint.parser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  linterOptions: {
    ...javascript.linterOptions,
  },
  files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
  plugins: {
    ...plugins,
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...perfectionistRules,
    ...sonarRules,
    ...tsRules,
    ...unicornRules,
    // Putting this last to override the default rules
    ...baseRules,
  },
};
