import tseslint from 'typescript-eslint';

import javascript from './javascript.mjs';
import plugins from './plugins.mjs';
import tsRules from './rules/typescript.mjs';

export const typescriptLanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: process.cwd(),
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};

export default {
  ...javascript,
  languageOptions: {
    ...javascript.languageOptions,
    ...typescriptLanguageOptions,
  },
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  plugins: {
    ...plugins,
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...tsRules,
    ...javascript.rules,
  },
};
