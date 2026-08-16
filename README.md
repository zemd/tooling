# TypeScript tooling

TypeScript tools and shared configurations maintained by zemd.

## Workspaces

- [`eslint/`](./eslint) contains ESLint flat configurations and their shared utilities.
- [`vscode/`](./vscode) contains Visual Studio Code themes, tools, and configuration.

Each publishable package owns its source, package metadata, changelog, and documentation. Repository-wide formatting, linting, builds, tests, and release checks are orchestrated from the private root package.

## Development

Use Node.js 26 and the pnpm version declared in `package.json`.

```sh
pnpm install
pnpm build
pnpm test
pnpm typecheck
pnpm lint-check
pnpm format-check
pnpm lint-publish
```

Run `pnpm release-change` when a pull request changes a public package.

## License

Licensed under the [Apache License 2.0](./LICENSE).
