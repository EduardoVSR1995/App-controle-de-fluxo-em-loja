module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  "@typescript-eslint/type-annotation-spacing": ["error", { after: true, before: false }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "warn",
    "boundaries/element-types": [2, {
      "default": "disallow",
      "message": "${file.type} não podem importar ${dependency.type}",
      "rules": [
        {
          "from": ["pages"],
          "allow": ["components"],
        },
        {
          "from": ["components"],
          "allow": ["services"],
        }
      ]
    }
  ]
}
