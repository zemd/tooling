import assert from "node:assert/strict";
import { test } from "node:test";

import { react } from "./index.ts";

void test("builds React configs without optional compiler or refresh rules", () => {
  const configs = react({
    enableReact19: false,
    enableRefresh: false,
    files: ["src/**/*.tsx"],
  });

  assert.deepEqual(
    configs.map((config) => config.name),
    ["zemd/react/setup", "zemd/react/rules"],
  );
  assert.equal(configs[1]?.rules?.["react-compiler/react-compiler"], undefined);
});
