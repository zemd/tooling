import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = fileURLToPath(new URL("../", import.meta.url));
const buildDirectory = path.join(packageRoot, "build");
const outputFile = path.join(buildDirectory, "zemd-vscode-theme.vsix");

await rm(buildDirectory, { recursive: true, force: true });
await mkdir(buildDirectory, { recursive: true });

const executable = process.platform === "win32" ? "vsce.cmd" : "vsce";
const child = spawn(executable, ["package", "--out", outputFile], {
  cwd: packageRoot,
  stdio: "inherit",
});

await new Promise<void>((resolve, reject) => {
  child.once("error", reject);
  child.once("exit", (code, signal) => {
    if (code === 0) {
      resolve();
      return;
    }

    reject(new Error(signal ? `vsce exited after ${signal}` : `vsce exited with code ${code}`));
  });
});
