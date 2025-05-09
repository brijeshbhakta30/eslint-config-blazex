import sonarjs from 'eslint-plugin-sonarjs';

export default {
  ...sonarjs.configs.recommended.rules,
  'sonarjs/no-duplicate-string': 0,
  'sonarjs/todo-tag': 0,
};
