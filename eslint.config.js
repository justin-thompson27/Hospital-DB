
import { configs } from "@eslint/js";
import { config, configs as _configs } from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
 
export default config(
  configs.recommended,
  ..._configs.recommended,
  eslintConfigPrettier
);

