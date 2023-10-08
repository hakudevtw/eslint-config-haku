module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "./lib/base.js",
    "./lib/redux.js",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
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
