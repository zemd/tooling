import assert from "node:assert/strict";
import { test } from "node:test";

import javascript, { json } from "./index.ts";

void test("builds JavaScript and JSON flat configs", () => {
  const javascriptConfigs = javascript({ env: "node" });
  const jsonConfigs = json();

  assert.ok(javascriptConfigs.some((config) => config.name === "zemd/javascript/setup"));
  assert.ok(javascriptConfigs.some((config) => config.name === "zemd/javascript/rules"));
  assert.deepEqual(
    jsonConfigs.map((config) => config.name),
    ["zemd/json/setup", "zemd/json/files", "zemd/jsonc/files", "zemd/json5/files"],
  );
});
