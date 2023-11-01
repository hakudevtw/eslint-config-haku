module.exports = {
  extends: [
    "./lib/base.js",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
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
