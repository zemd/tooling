import type { Linter } from "eslint";
import plugin from "eslint-plugin-turbo";

const recommendedConfig = plugin.configs?.["flat/recommended"];

if (!recommendedConfig || Array.isArray(recommendedConfig)) {
  throw new TypeError("eslint-plugin-turbo did not expose its flat recommended config");
}

const recommendedRules = recommendedConfig.rules ?? {};

type TurboOptions = {
  allowList: string[];
};

export default function turbo({
  allowList = ["^ENV_[A-Z]+$"],
}: Partial<TurboOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/turbo/ignores",
      ignores: ["**/.turbo/**"],
    },
    {
      name: "zemd/turbo/rules",
      files: [`**/turbo.json`],
      plugins: {
        turbo: plugin,
      },
      rules: {
        ...recommendedRules,
        "turbo/no-undeclared-env-vars": [
          "error",
          {
            allowList,
          },
        ],
      },
    },
  ];
}
