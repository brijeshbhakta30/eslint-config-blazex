import perfectionist from 'eslint-plugin-perfectionist';

export default {
  ...perfectionist.configs['recommended-natural'].rules,
  'perfectionist/sort-modules': 0,
  'perfectionist/sort-object-types': 0,
  'perfectionist/sort-objects': 0,
  'perfectionist/sort-union-types': 0,
};
