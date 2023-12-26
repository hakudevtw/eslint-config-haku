module.exports = {
  env: {
    es2021: true,
  },
  extends: ["airbnb", "airbnb-typescript/base"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "max-lines": ["error", 300],
  },
};
