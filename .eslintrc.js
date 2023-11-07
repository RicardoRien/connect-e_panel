module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:@next/next/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "simple-import-sort"],
  rules: {
    "spaced-comment": "off",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/no-non-null-assertion': 'off',
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true }
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^react$", "^react-redux$", "^@reduxjs/toolkit$", "^next", "^[a-z]", "^use client"],
          ["^@atoms", "^@molecules", "^@organisms", "^@icons"],
          ["^@"],
          ["^~"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^\\u0000"],
          ["^.+\\.s?css$"]
        ]
      }
    ],
  },
  settings: {
    react: {
     version: "detect",
    },
  },
};