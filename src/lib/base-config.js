module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        semi: true,
      },
    ],
  },
};
