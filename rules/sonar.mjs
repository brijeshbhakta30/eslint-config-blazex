import sonar from 'eslint-plugin-sonarjs';

export default {
  ...sonar.configs.recommended.rules,
  'sonarjs/no-duplicate-string': 0,
  'sonarjs/todo-tag': 0,
};
