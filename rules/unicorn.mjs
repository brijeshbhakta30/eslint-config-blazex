import unicorn from 'eslint-plugin-unicorn';

export default {
  ...unicorn.configs.recommended.rules,
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/prevent-abbreviations': [
    'error',
    {
      allowList: {
        acc: true,
        args: true,
        arg: true,
        props: true,
        prop: true,
        req: true,
        res: true,
        getInitialProps: true,
        getServerSideProps: true,
        getStaticProps: true,
        getStaticPaths: true,
        err: true,
        obj: true,
        db: true,
        utils: true,
        util: true,
        config: true,
      },
    },
  ],
  'unicorn/switch-case-braces': [
    'error',
    'avoid',
  ],
};
