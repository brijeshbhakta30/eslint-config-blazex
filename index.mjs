import javascriptConfig from './javascript.mjs';
import nextConfig from './next.mjs';
import reactConfig from './react.mjs';
import typescriptConfig from './typescript.mjs';

export const configs = {
  javascript: javascriptConfig,
  next: nextConfig,
  react: reactConfig,
  typescript: typescriptConfig,
};

export const rules = {
  javascript: javascriptConfig.rules,
  next: nextConfig.rules,
  react: reactConfig.rules,
  typescript: typescriptConfig.rules,
};
