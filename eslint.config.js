import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {react, prettier},
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      ts.configs.strict,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          printWidth: 120,
          tabWidth: 2,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/jsx-no-target-blank": 1,
      'react-hooks/exhaustive-deps': 'error',
      "no-console": "warn",
      "no-debugger": "warn",
    },
  },
])
