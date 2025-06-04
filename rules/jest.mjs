import jestPlugin from 'eslint-plugin-jest';

export default {
  ...jestPlugin.configs['flat/recommended'].rules,
};
