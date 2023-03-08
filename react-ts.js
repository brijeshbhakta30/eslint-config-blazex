const reactConfig = require('./react');

module.exports = {
  extends: [
    ...reactConfig.extends,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
