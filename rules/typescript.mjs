export default {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false },
  ],
  '@typescript-eslint/return-await': 0,
};
