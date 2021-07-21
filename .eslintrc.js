module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  "plugins": [
    "vue",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "never",
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
      },
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      },
    ],
    "curly": [
      "error",
      "all",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "vue/html-indent": [
      "error", 4,
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
      },
    ],
    "no-trailing-spaces": [
      "error",
    ],
    "no-useless-return": [
      "error",
    ],
    "no-else-return": [
      "error",
    ],
    "padded-blocks": [
      "error",
      "never",
    ],
  },
}
