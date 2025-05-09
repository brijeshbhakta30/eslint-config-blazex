import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  ...reactPlugin.configs.recommended.rules,
  ...reactHooks.configs.recommended.rules,
  ...jsxA11y.flatConfigs.recommended.rules,
  'react/jsx-uses-react': 'off', // ✅ for React 17+
  'react/react-in-jsx-scope': 'off',
};
