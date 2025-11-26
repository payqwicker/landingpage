// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;

import next from "@next/eslint-plugin-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  next.configs["core-web-vitals"],

  {
    languageOptions: {
      sourceType: "module",
    },
    rules: {
      // Your custom ESLint rules here
    },
  },
];
