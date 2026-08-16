import assert from "node:assert/strict";
import { test } from "node:test";

import all, { astro } from "./index.ts";

void test("composes Astro rules with one React preset", () => {
  const astroConfigs = astro({ files: ["src/**/*.astro"] });
  const allConfigs = all({ files: ["src/**/*.astro"] });

  assert.ok(astroConfigs.every((config) => !config.name?.startsWith("zemd/react/")));
  assert.equal(allConfigs.filter((config) => config.name === "zemd/react/setup").length, 1);
  assert.ok(allConfigs.some((config) => config.name?.startsWith("zemd/astro/")));
});
