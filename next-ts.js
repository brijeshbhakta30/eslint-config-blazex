const nextConfig = require('./next');

module.exports = {
  extends: [
    ...nextConfig.extends,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
