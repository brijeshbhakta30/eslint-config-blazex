# eslint-config-blazex

This package provides a set of extensible shared ESLint configurations using the new Flat Config format introduced in ESLint. It supports JavaScript, TypeScript, React, and Next.js projects.

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
  configs.react,
  configs.typescript, // Include TypeScript rules if using TypeScript
];
```

### Next.js Config (JavaScript)

To use the Next.js configuration for JavaScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.next,
];
```

### Next.js Config (TypeScript)

To use the Next.js configuration for TypeScript:

```javascript
// eslint.config.mjs
import { configs } from 'eslint-config-blazex';

export default [
  configs.next,
  configs.typescript, // Include TypeScript rules if using TypeScript
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
- **React (TypeScript)**: Combine `configs.react` and `configs.typescript`
- **Next.js (JavaScript)**: `configs.next`
- **Next.js (TypeScript)**: Combine `configs.next` and `configs.typescript`

## Exported Rules

If you need access to the individual rules for advanced use cases, you can import them like this:

```javascript
import { rules } from 'eslint-config-blazex';

console.log(rules.javascript); // Logs JavaScript-specific rules
console.log(rules.typescript); // Logs TypeScript-specific rules
```

## Notes

- This package is designed to work with ESLint's Flat Config format. Ensure you are using a compatible version of ESLint.
- For Next.js and React configurations, make sure you have the necessary plugins installed (e.g., `eslint-plugin-react`, `eslint-plugin-next`).

For more details, refer to the [ESLint Flat Config documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new).
