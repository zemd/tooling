import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type ThemeContribution = {
  label: string;
  path: string;
};

type ExtensionManifest = {
  contributes?: {
    themes?: ThemeContribution[];
  };
};

const packageRoot = fileURLToPath(new URL("../", import.meta.url));
const manifestPath = path.join(packageRoot, "package.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as ExtensionManifest;
const themes = manifest.contributes?.themes;

if (!themes || themes.length === 0) {
  throw new Error("package.json must contribute at least one theme");
}

for (const theme of themes) {
  if (!theme.label || !theme.path) {
    throw new Error("every theme contribution must have a label and path");
  }

  const themePath = path.resolve(packageRoot, theme.path);
  const relativePath = path.relative(packageRoot, themePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`theme path escapes the package: ${theme.path}`);
  }

  await access(themePath);
}
