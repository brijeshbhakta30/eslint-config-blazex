import nextPlugin from '@next/eslint-plugin-next';

import reactTypescript from './reactTypescript.mjs';
import nextRules from './rules/next.mjs';

export default {
  ...reactTypescript,
  plugins: {
    ...reactTypescript.plugins,
    '@next/next': nextPlugin,
  },
  rules: {
    ...reactTypescript.rules,
    ...nextRules,
  },
};
