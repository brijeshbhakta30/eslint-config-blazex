import nodePlugin from 'eslint-plugin-n';

import javascript from './javascript.mjs';
import nodeRules from './rules/node.mjs';

export default {
  ...javascript,
  plugins: {
    ...javascript.plugins,
    n: nodePlugin,
  },
  rules: {
    ...nodeRules,
    ...javascript.rules,
  },
};
