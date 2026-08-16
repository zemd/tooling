import assert from "node:assert/strict";
import { test } from "node:test";

import { typescript } from "./index.ts";

void test("builds TypeScript setup and rule configs", () => {
  const configs = typescript({ files: ["src/**/*.ts"] });

  assert.deepEqual(
    configs.map((config) => config.name),
    ["zemd/typescript/setup", "zemd/typescript/rules"],
  );
  assert.deepEqual(configs[0]?.files, ["src/**/*.ts"]);
});
