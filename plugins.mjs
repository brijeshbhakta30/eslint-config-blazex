import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';

export default {
  unicorn,
  perfectionist,
  import: importPlugin,
  jest,
  sonarjs,
  promise,
  '@stylistic': stylistic,
};
