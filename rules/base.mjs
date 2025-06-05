import xo from 'eslint-config-xo';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';

export default {
  ...xo[0].rules,
  ...importPlugin.flatConfigs.recommended.rules,
  ...importPlugin.flatConfigs.typescript.rules,
  ...promise.configs['flat/recommended'].rules,
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/indent-binary-ops': ['error', 2],
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
  'no-warning-comments': 0,
  camelcase: 0,
  complexity: 0,
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
  'no-unused-vars': ['error', {
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    caughtErrorsIgnorePattern: '^_',
  }],
  'capitalized-comments': ['error', 'always', {
    // eslint-disable-next-line @stylistic/max-len
    ignorePattern: String.raw`^(?:\s*(?:const|let|var|function|import|export|type|interface|if|for|while|switch|return|throw|class|await|async|try)\b|[\w$.]+\s*(?:=|=>|\()|[{};]|[\w$]+,\s*$|(?!TODO:|FIXME:)\w+:\s*|\w+\s*{|[\w-]+\s*:\s*[^;]+;|[\w$.]+(?:\s+as\s+\w+)?\s*,?\s*$)`,
  }],
};
