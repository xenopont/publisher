// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended",
  ],
  ignorePatterns: ["./node_modules/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    impliedStrict: true,
    project: "./tsconfig.json",
    createDefaultProgram: true,
  },
  plugins: ["@typescript-eslint", "unicorn"],
  rules: {
    //
  },
};
