import javascriptConfig from './javascript.mjs';
import nodeConfig from './node.mjs';
import nodeTypescriptConfig from './nodeTypescript.mjs';
import reactConfig from './react.mjs';
import reactTypescriptConfig from './reactTypescript.mjs';
import typescriptConfig from './typescript.mjs';

export const configs = {
  javascript: javascriptConfig,
  node: nodeConfig,
  nodeTypescript: nodeTypescriptConfig,
  react: reactConfig,
  reactTypescript: reactTypescriptConfig,
  typescript: typescriptConfig,
};

export const rules = {
  javascript: javascriptConfig.rules,
  node: nodeConfig.rules,
  nodeTypescript: nodeTypescriptConfig.rules,
  react: reactConfig.rules,
  reactTypescript: reactTypescriptConfig.rules,
  typescript: typescriptConfig.rules,
};
