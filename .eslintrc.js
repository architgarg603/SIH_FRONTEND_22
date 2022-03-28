module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true
    },
    settings:{
        react:{
            "version":'detect'
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "import/no-webpack-loader-syntax": "off"
    }
}
