const eslintConfig = require('./.eslintrc');

module.exports = {
  extends: [
    ...eslintConfig.extends,
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
