# eslint-config-blazex

This package provides a set of extensible shared ESLint configurations using the new Flat Config format introduced in ESLint. It supports JavaScript, TypeScript, React, and Node.js projects.

## Installation

To use this package, install it via npm or yarn:

```bash
npm install eslint-config-blazex --save-dev
```

or

```bash
yarn add eslint-config-blazex --dev
```

## Usage

Since this package uses the Flat Config format, you need to create an `eslint.config.mjs` file in the root of your project and import the desired configuration.

### JavaScript Config

To use the JavaScript configuration:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.javascript,
];
```

### TypeScript Config

To use the TypeScript configuration:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.typescript,
];
```

### React Config (JavaScript)

To use the React configuration for JavaScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.react,
];
```

### React Config (TypeScript)

To use the React configuration for TypeScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.reactTypescript,
];
```

### Node.js Config (JavaScript)

To use the Node.js configuration for JavaScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.node,
];
```

### Node.js Config (TypeScript)

To use the Node.js configuration for TypeScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.nodeTypescript,
];
```

## Customizing Rules

If you want to customize or override specific rules, you can extend the configuration like this:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  {
    ...configs.javascript,
    rules: {
      ...configs.javascript.rules,
      'no-console': 'warn', // Example: Override the no-console rule
    },
  },
];
```

## Available Configurations

- **JavaScript**: `configs.javascript`
- **TypeScript**: `configs.typescript`
- **React (JavaScript)**: `configs.react`
- **React (TypeScript)**: `configs.reactTypescript`
- **Node.js (JavaScript)**: `configs.node`
- **Node.js (TypeScript)**: `configs.nodeTypescript`

## Exported Rules

If you need access to the individual rules for advanced use cases, you can import them like this:

```javascript
import { rules } from 'eslint-config-blazex';

console.log(rules.javascript); // Logs JavaScript-specific rules
console.log(rules.typescript); // Logs TypeScript-specific rules
console.log(rules.react); // Logs React-specific rules
console.log(rules.reactTypescript); // Logs React+TypeScript-specific rules
console.log(rules.node); // Logs Node.js-specific rules
console.log(rules.nodeTypescript); // Logs Node.js+TypeScript-specific rules
```

## Summary of Packages Used

This configuration leverages the following ESLint plugins and packages:

- **Core ESLint**: Provides the base linting functionality.
- **`eslint-plugin-react`**: Adds linting rules for React projects.
- **`eslint-plugin-node`**: Adds linting rules for Node.js projects.
- **`eslint-plugin-unicorn`**: Enforces better practices and modern JavaScript features.
- **`eslint-plugin-sonarjs`**: Detects bugs and code smells.
- **`eslint-plugin-perfectionist`**: Helps enforce consistent code structure and ordering.
- **`@typescript-eslint/eslint-plugin`**: Provides TypeScript-specific linting rules.
- **`@typescript-eslint/parser`**: Parses TypeScript code for ESLint.
- **`globals`**: Provides a list of global variables for different environments.

## Notes

- This package is designed to work with ESLint's Flat Config format. Ensure you are using a compatible version of ESLint.
- For React and Node.js configurations, make sure you have the necessary plugins installed (e.g., `eslint-plugin-react`, `eslint-plugin-node`).

For more details, refer to the [ESLint Flat Config documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new).
