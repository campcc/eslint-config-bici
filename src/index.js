/**
 * @ Copyright: bicitech, eslint rules for FED
 */
const extendsBase = ["airbnb", "prettier", "plugin:react/recommended", "prettier/react"];
const env = { browser: true, node: true, jest: true, es6: true };
const coverRules = {
  "camelcase": 0,
  "react/jsx-one-expression-per-line": 0,
  "react/prop-types": 0,
  "react/forbid-prop-types": 0,
  "react/jsx-indent": 0,
  "react/jsx-wrap-multilines": ["error", { declaration: false, assignment: false }],
  "jsx-a11y/no-static-element-interactions": 0,
  "jsx-a11y/anchor-has-content": 0,
  "jsx-a11y/click-events-have-key-events": 0,
  "jsx-a11y/anchor-is-valid": 0,
  "comma-dangle": ["error", "always-multiline"],
  "react/jsx-filename-extension": 0,
  "react/state-in-constructor": 0,
  "react/jsx-props-no-spreading": 0,
  "react/require-default-props": 0,
  "react/default-props-match-prop-types": 0,
  "import/no-cycle": 0,
  "react/no-find-dom-node": 0,
  "no-underscore-dangle": 0,
  "react/sort-comp": 0,
  "jsx-a11y/label-has-for": 0,
  "no-plusplus": 0,
  "no-continue": 0,
  "react/display-name": 0,
  "no-restricted-globals": 0,
  "max-classes-per-file": 0,
  "react/static-property-placement": 0,
};

const eslintrc = {
  extends: extendsBase,
  env,
  parser: "babel-eslint",
  plugins: ["react", "babel"],
  rules: coverRules,
};

Object.assign(eslintrc.rules, {
  "import/no-unresolved": 0,
});

module.exports = eslintrc;
