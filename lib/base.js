module.exports = {
  env: {
    es2021: true,
  },
  extends: ["airbnb", "airbnb-typescript/base"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "max-lines": ["error", 300],
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
