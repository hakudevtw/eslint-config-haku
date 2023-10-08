# 🍃 Haku's Eslint Config

## ✅ Packages

- `eslint-config-haku` (base config)
  - extend with `haku`
  - extends config
    - `plugin:prettier/recommended`
- `eslint-config-haku/react` (react config)
  - extend with `haku/react`
  - extends config
    - `haku`
    - `airbnb`
    - `airbnb-typescript`
- `eslint-config-haku/next` (nextJS config)
  - extend with `haku/next`
  - extends config
    - `haku/react`

## ✅ Setup Project

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

- setup to auto fix lint problems on save
  ```json
  # .vscode/config.json
  {
    "editor.codeActionsOnSave": { "source.fixAll": true },
    "editor.formatOnSave": false
  }
  ```
