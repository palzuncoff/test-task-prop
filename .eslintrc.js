module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jasmine": true,
      "mocha": true
  },
  "extends": [
      "airbnb",
      "prettier",
      "prettier/react"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "indent": [
          "error",
          4,
          { "SwitchCase": 1 }
      ],
      "react/forbid-prop-types": [
          "error",
          { "forbid": [] }
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "import/no-extraneous-dependencies": [
          2,
          {
              "devDependencies": true
          }
      ],
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [
                  ".js"
              ]
          }
      ],
      "no-underscore-dangle": "off",
      "one-var-declaration-per-line": "off",
      "one-var": [0],
      "no-case-declarations": [0],
      "no-plusplus": [0],
      "import/no-named-as-default": [0],
      "import/prefer-default-export": [0],
      "max-len": [1, { "code": 120 }],
      "no-unused-expressions": [2, { "allowShortCircuit": true }]
  }
};
