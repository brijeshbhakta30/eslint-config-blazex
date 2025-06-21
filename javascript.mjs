import globals from 'globals';

import plugins from './plugins.mjs';
import baseRules from './rules/base.mjs';
import jestRules from './rules/jest.mjs';
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
      ...globals.jest,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.mjs', '.cjs'],
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error',
  },
  files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
  plugins,
  rules: {
    ...perfectionistRules,
    ...sonarRules,
    ...unicornRules,
    ...jestRules,
    // Putting this last to override the default rules
    ...baseRules,
  },
};
