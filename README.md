# 🍃 Haku's Eslint Config

## 🫐 Packages

- `eslint-config-haku` (base config)
  - extends config
    - `eslint:recommended`
    - `plugin:@typescript-eslint/recommended`
    - `plugin:import/recommended`
    - `plugin:import/typescript`
    - `plugin:prettier/recommended`
- `eslint-config-haku/react` (react config)
  - extends config
    - `haku`
    - `airbnb`
    - `airbnb-typescript`
- `eslint-config-haku/next` (nextJS config)
  - extends config
    - `haku/react`
    - `next/core-web-vitals`

## 🦴 Setup Project

### Installation

- Install `eslint-config-haku`
- Extend the config in `.eslintrc.js`

  ```javascript
  // Extend the config matching your project
  extends: ["haku/react"],
  parserOptions: {
      // Warn: the location may differ in different project structure
      project: "./tsconfig.json",
  },
  ```

### VSCode

- setup to auto fix lint problems on save
  ```json
  # .vscode/config.json
  {
    "editor.codeActionsOnSave": { "source.fixAll": true },
    "editor.formatOnSave": false
  }
  ```

## 🥑 Recipes

### Redux

- 參考 https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
- add rule to restrict using custom `useAppSelector` and `useAppDispatch` for typing
  ```javascript
  "@typescript-eslint/no-restricted-imports": [
    "warn",
    {
      name: "react-redux",
      importNames: ["useSelector", "useDispatch"],
      message: "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
    },
  ],
  ```
