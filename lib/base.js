module.exports = {
  env: {
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
  },
};
