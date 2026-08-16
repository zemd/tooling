import assert from "node:assert/strict";
import { test } from "node:test";

import { next } from "./index.ts";

void test("builds scoped Next.js configs", () => {
  const configs = next({ enableRefresh: false, files: ["app/**/*.{ts,tsx}"] });

  assert.deepEqual(
    configs.map((config) => config.name),
    ["zemd/next/ignores", "zemd/next/files", "zemd/next/rules"],
  );
  assert.deepEqual(configs[2]?.files, ["app/**/*.{ts,tsx}"]);
});
