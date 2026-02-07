import type { Linter } from 'eslint';

declare module 'eslint-config-blazex' {
  interface ESLintConfig extends Linter.Config {
    files?: string[];
    ignores?: string[];
  }

  interface ConfigExports {
    javascript: ESLintConfig;
    node: ESLintConfig;
    nodeTypescript: ESLintConfig;
    react: ESLintConfig;
    reactTypescript: ESLintConfig;
    typescript: ESLintConfig;
  }

  interface RuleExports {
    javascript: Linter.RulesRecord;
    node: Linter.RulesRecord;
    nodeTypescript: Linter.RulesRecord;
    react: Linter.RulesRecord;
    reactTypescript: Linter.RulesRecord;
    typescript: Linter.RulesRecord;
  }

  export const configs: ConfigExports;
  export const rules: RuleExports;
}

export {};