module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "airbnb",
        'prettier',
        'prettier/react'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "import/prefer-default-export": "off",
      'prettier/prettier': "error",
      "react/jsx-filename-extension": [
        "warn", {extensions: ['.jsx', 'js']}
      ],
    },
    "globals": {
      "React": "writable"
    }
};
