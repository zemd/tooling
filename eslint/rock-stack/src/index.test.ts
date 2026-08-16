import assert from "node:assert/strict";
import { test } from "node:test";

import fullstack, { turbo } from "./index.ts";

void test("builds the full-stack preset and Turbo rules", () => {
  const configs = fullstack();
  const turboConfigs = turbo({ allowList: ["^PUBLIC_"] });

  assert.ok(configs.some((config) => config.name === "zemd/graphql/setup"));
  assert.ok(configs.some((config) => config.name === "zemd/playwright/rules"));
  assert.ok(configs.some((config) => config.name === "zemd/vitest/rules"));
  assert.deepEqual(turboConfigs[1]?.rules?.["turbo/no-undeclared-env-vars"], [
    "error",
    { allowList: ["^PUBLIC_"] },
  ]);
});
