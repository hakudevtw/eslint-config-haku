module.exports = {
  env: {
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        semi: true,
        tabWidth: 2,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: null,
        custom: {
          // enum should be uppercase and snake case and allow double underscore
          regex: "^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$",
          match: true,
        },
      },
    ],
  },
};
