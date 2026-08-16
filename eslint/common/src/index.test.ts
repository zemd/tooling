import assert from "node:assert/strict";
import { test } from "node:test";

import { GLOB_JS, GLOB_SRC_ALL, makeGlobJsFiles, makeGlobSrcFiles } from "./index.ts";

void test("exports stable source globs", () => {
  assert.equal(GLOB_JS, "**/*.{js,mjs,cjs}");
  assert.equal(GLOB_SRC_ALL, "**/*.{jsx,mjsx,cjsx,tsx,mtsx,ctsx,js,mjs,cjs,ts,mts,cts}");
  assert.equal(makeGlobJsFiles("src/**/*"), "src/**/*.{js,mjs,cjs}");
  assert.equal(
    makeGlobSrcFiles("src/**/*"),
    "src/**/*.{jsx,mjsx,cjsx,tsx,mtsx,ctsx,js,mjs,cjs,ts,mts,cts}",
  );
});
