import react from './react.mjs';
import typescript, { typescriptLanguageOptions } from './typescript.mjs';

export default {
  ...react,
  languageOptions: {
    ...react.languageOptions,
    ...typescriptLanguageOptions,
  },
  plugins: {
    ...react.plugins,
    ...typescript.plugins,
  },
  files: [...react.files, ...typescript.files],
  rules: {
    ...react.rules,
    ...typescript.rules,
  },
};
