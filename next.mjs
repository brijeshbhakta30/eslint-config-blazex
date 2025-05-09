import react from './react.mjs';
import nextRules from './rules/next.mjs';

export default {
  ...react,
  rules: {
    ...react.rules,
    ...nextRules,
  },
};
