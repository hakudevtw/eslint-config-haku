# 🍃 Haku's Eslint Config

## 🦴 Setup Project

### Installation

- Install `eslint-config-haku`

  ```bash
  npm i --save-dev eslint-config-haku
  yarn add -D eslint-config-haku
  pnpm add -D eslint-config-haku
  ```

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

## 🍳 Trouble Shooting

### Can't resolve paths alias in monorepo projects

- Add [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript) plugin
