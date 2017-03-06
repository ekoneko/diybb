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
        "object-curly-spacing": 0,
        "comma-dangle": 0,
        "semi": 0,
        "arrow-body-style": 0,
        "no-console": 1,
        "arrow-parens": 0,
        "linebreak-style": 0,
        "no-plusplus": 0,
        "class-methods-use-this": 0,
        "no-unused-vars": 0,
        "prefer-const": 1,
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/prefer-stateless-function": 1,
        "react/forbid-prop-types": 1,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-boolean-value": 0,
        "react/self-closing-comp": 0,
    },
    "globals": {
        "__PRO__": true,
        "CPUtils": true,
        "CPAttachment": true,
        "CPNavigationBar": true
    }
}

