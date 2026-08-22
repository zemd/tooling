# ESLint configs

Composable [ESLint flat configs](https://eslint.org/docs/latest/use/configure/configuration-files) for modern JavaScript projects.

The packages focus on useful correctness rules, avoid stylistic formatting rules, and build on one another so you can install the preset closest to your stack.

## Packages

| Package                                             | Version                                                                                                                                                 | Use it for                                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [`@zemd/eslint-common`](./common/README.md)         | [![npm](https://img.shields.io/npm/v/@zemd/eslint-common?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-common)         | Shared types and utilities used by the other packages; most projects do not install it directly. |
| [`@zemd/eslint-js`](./js/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)                 | JavaScript and JSON projects.                                                                    |
| [`@zemd/eslint-ts`](./ts/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts)                 | TypeScript projects; includes the JavaScript configs.                                            |
| [`@zemd/eslint-react`](./react/README.md)           | [![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react)           | React projects; includes the TypeScript and JavaScript configs.                                  |
| [`@zemd/eslint-rock-stack`](./rock-stack/README.md) | [![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack) | Full-stack React projects using tools such as GraphQL, Playwright, Storybook, Turbo, or Vitest.  |
| [`@zemd/eslint-next`](./next/README.md)             | [![npm](https://img.shields.io/npm/v/@zemd/eslint-next?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-next)             | Next.js projects; builds on the full-stack config.                                               |
| [`@zemd/eslint-astro`](./astro/README.md)           | [![npm](https://img.shields.io/npm/v/@zemd/eslint-astro?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-astro)           | Astro projects, with React support included by default.                                          |

Choose the highest-level package that matches your project. Each package README documents its options, optional integrations, and named exports.

## Quick start

Install ESLint and one config package:

```sh
npm install --save-dev eslint @zemd/eslint-ts
```

Create `eslint.config.js`:

```js
import typescript from "@zemd/eslint-ts";

export default [...typescript()];
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Development

See the [repository README](../README.md#development) for workspace commands and contribution checks.

## License

Licensed under the [Apache License 2.0](../LICENSE).

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
