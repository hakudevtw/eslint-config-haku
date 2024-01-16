module.exports = {
  extends: [
    "./lib/base",
    "plugin:react-hooks/recommended ",
    "airbnb-typescript",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "jsx-a11y/label-has-associated-control": "off",

    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
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
