import unicorn from 'eslint-plugin-unicorn';

export default {
  ...unicorn.configs.recommended.rules,
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/switch-case-braces': [
    'error',
    'avoid',
  ],
};
