import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import javascript from './javascript.mjs';
import reactRules from './rules/react.mjs';

export default {
  ...javascript,
  languageOptions: {
    ...javascript.languageOptions,
    globals: {
      ...javascript.languageOptions.globals,
      ...globals.browser,
      ...globals.serviceworker,
    },
  },
  plugins: {
    ...javascript.plugins,
    react: reactPlugin,
    'react-hooks': reactHooks,
  },
  rules: {
    ...reactRules,
    ...javascript.rules,
  },
  files: [...javascript.files, '**/*.jsx'],
};

