import globals from 'globals';

import plugins from './plugins.mjs';
import baseRules from './rules/base.mjs';
import perfectionistRules from './rules/perfectionist.mjs';
import sonarRules from './rules/sonar.mjs';
import unicornRules from './rules/unicorn.mjs';

export default {
  languageOptions: {
    globals: {
      ...globals.es2021,
      ...globals.nodeBuiltin,
      ...globals.node,
      ...globals.commonjs,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error',
  },
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  plugins,
  rules: {
    ...perfectionistRules,
    ...sonarRules,
    ...unicornRules,
    // Putting this last to override the default rules
    ...baseRules,
  },
};
