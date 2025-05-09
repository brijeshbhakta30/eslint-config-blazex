import react from './react.mjs';
import typescript from './typescript.mjs';

export default {
  ...react,
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
