module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint-config-airbnb"
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/no-duplicates": 0,
    "import/extensions": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-absolute-path": 0,
    "import/prefer-default-export": 0,
    "object-curly-spacing": 0,
    "comma-dangle": 0,
    "semi": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "arrow-body-style": 0,
    "no-console": 1,
    "arrow-parens": 0,
    "linebreak-style": 0,
    "no-plusplus": 0,
    "class-methods-use-this": 0,
    "no-unused-vars": 0,
    "prefer-const": 1,
    "no-use-before-define": [2, {functions: false}],
    "object-property-newline": [2, {allowMultiplePropertiesPerLine: true}],
    "consistent-return": [2, {treatUndefinedAsUnspecified: true}],
    "no-mixed-operators": 0,
    "no-alert": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/prefer-stateless-function": [1, {"ignorePureComponents": true}],
    "react/forbid-prop-types": 1,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-boolean-value": 0,
    "react/self-closing-comp": 0,
    "react/prop-types": [2, {ignore: ['dispatch', 'history', 'model']}],
    "guard-for-in": 0,
  },
  "globals": {
    'alert': true,
    'GLOBALS': true,
    '_': true,
  }
}

