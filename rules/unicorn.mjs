import unicorn from 'eslint-plugin-unicorn';

export default {
  ...unicorn.configs.recommended.rules,
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
};
