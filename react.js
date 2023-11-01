module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb", "airbnb-typescript", "./typescript.js", "prettier"],
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
