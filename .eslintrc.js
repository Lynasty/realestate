module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "next"],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 13,
      sourceType: "module",
  },
  plugins: ["react"],
  rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
  },
};