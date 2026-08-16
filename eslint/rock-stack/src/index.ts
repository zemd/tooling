import type { Linter } from "eslint";
import react from "@zemd/eslint-react";
import graphql from "./graphql.ts";
import playwright from "./playwright.ts";
// import tailwind from "./tailwind.ts";
import turbo from "./turbo.ts";
import vitest from "./vitest.ts";

export default function fullstack(): Array<Linter.Config> {
  return [
    // better diff comment
    ...react(),
    ...graphql(),
    ...playwright(),
    // ...tailwind(),
    ...turbo(),
    ...vitest(),
  ];
}

export * from "@zemd/eslint-react";
export { default as graphql } from "./graphql.ts";
export { default as playwright } from "./playwright.ts";
// export { default as tailwind } from "./tailwind.ts";
export { default as turbo } from "./turbo.ts";
export { default as vitest } from "./vitest.ts";
export { default as storybook } from "./storybook.ts";
