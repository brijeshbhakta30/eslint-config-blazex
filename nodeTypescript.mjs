import node from './node.mjs';
import typescript from './typescript.mjs';

export default {
  ...node,
  plugins: {
    ...node.plugins,
    ...typescript.plugins,
  },
  files: [...node.files, ...typescript.files],
  rules: {
    ...node.rules,
    ...typescript.rules,
  },
};
