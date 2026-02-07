import javascriptConfig from './javascript.mjs';
import nextConfig from './next.mjs';
import nextTypescriptConfig from './nextTypescript.mjs';
import nodeConfig from './node.mjs';
import nodeTypescriptConfig from './nodeTypescript.mjs';
import reactConfig from './react.mjs';
import reactTypescriptConfig from './reactTypescript.mjs';
import typescriptConfig from './typescript.mjs';

export const configs = {
  javascript: javascriptConfig,
  next: nextConfig,
  nextTypescript: nextTypescriptConfig,
  node: nodeConfig,
  nodeTypescript: nodeTypescriptConfig,
  react: reactConfig,
  reactTypescript: reactTypescriptConfig,
  typescript: typescriptConfig,
};

export const rules = {
  javascript: javascriptConfig.rules,
  next: nextConfig.rules,
  nextTypescript: nextTypescriptConfig.rules,
  node: nodeConfig.rules,
  nodeTypescript: nodeTypescriptConfig.rules,
  react: reactConfig.rules,
  reactTypescript: reactTypescriptConfig.rules,
  typescript: typescriptConfig.rules,
};
