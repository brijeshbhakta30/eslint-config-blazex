import nodePlugin from 'eslint-plugin-n';

export default {
  ...nodePlugin.configs.recommended.rules,
  'n/no-missing-import': 0,
};
