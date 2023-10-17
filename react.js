module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "./lib/base.js",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-props-no-spreading": "off",
    "no-restricted-imports": [
      "error",
      {
        name: "react",
        importNames: ["default"],
        message: 'Use import { xxx } from "react"; instead',
      },
    ],
  },
};
