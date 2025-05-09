import javascript from './javascript.mjs';
import reactRules from './rules/react.mjs';

export default {
  ...javascript,
  rules: {
    ...javascript.rules,
    ...reactRules,
  },
  files: [...javascript.files, '**/*.jsx'],
};

