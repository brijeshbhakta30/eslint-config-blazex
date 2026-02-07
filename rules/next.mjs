import nextPlugin from '@next/eslint-plugin-next';

import reactRules from './react.mjs';

export default {
  ...nextPlugin.configs.recommended.rules,
  ...reactRules,
};
