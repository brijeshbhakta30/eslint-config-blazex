import nextPlugin from '@next/eslint-plugin-next';

import react from './react.mjs';
import nextRules from './rules/next.mjs';

export default {
  ...react,
  plugins: {
    ...react.plugins,
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextRules,
    ...react.rules,
  },
};
