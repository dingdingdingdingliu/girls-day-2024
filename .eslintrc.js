module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off", // 禁用 React 17+ 的不再需要的規則
    "react/prop-types": "off", // 禁用 PropTypes 檢查
  },
  settings: {
    react: {
      version: "detect", // 自動檢測 React 的版本
    },
  },
};
