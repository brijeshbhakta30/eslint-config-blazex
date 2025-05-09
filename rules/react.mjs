import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  ...reactPlugin.configs.recommended.rules,
  ...reactHooks.configs.recommended.rules,
  'react/jsx-uses-react': 'off', // ✅ for React 17+
  'react/react-in-jsx-scope': 'off',
};
