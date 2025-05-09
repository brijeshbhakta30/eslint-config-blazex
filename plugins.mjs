import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';

export default {
  unicorn,
  perfectionist,
  import: importPlugin,
  sonarjs,
  promise,
  '@stylistic': stylistic,
};
