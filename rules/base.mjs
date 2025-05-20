import xo from 'eslint-config-xo';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';

export default {
  ...xo[0].rules,
  ...importPlugin.flatConfigs.recommended.rules,
  ...importPlugin.flatConfigs.typescript.rules,
  ...promise.configs['flat/recommended'].rules,
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/function-paren-newline': ['error', 'multiline'],
  '@stylistic/indent': 0,
  '@stylistic/no-mixed-spaces-and-tabs': 0,
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
  'import/prefer-default-export': 0,
  indent: ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    FunctionDeclaration: {
      parameters: 1,
      body: 1,
    },
    FunctionExpression: {
      parameters: 1,
      body: 1,
    },
    CallExpression: {
      arguments: 1,
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
  }],
  'no-mixed-spaces-and-tabs': 'error',
  'no-warning-comments': 0,
  camelcase: 0,
  'func-names': ['error', 'as-needed'],
  'max-len': [
    'error',
    {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
    },
  ],
  'max-params': ['error', 5],
  'no-console': 'error',
  'no-param-reassign': 'error',
};
