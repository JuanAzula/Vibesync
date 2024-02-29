module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
          "react/react-in-jsx-scope": "off",
          "@typescript-eslint/prefer-nullish-coalescing": "off",
          "@typescript-eslint/strict-boolean-expressions": "off",
          "react/prop-types": "off",
          "@typescript-eslint/no-unsafe-argument": "off",
          "@typescript-eslint/no-misused-promises": "off"
    }
}
