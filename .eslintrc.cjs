/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const path = require('node:path');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, './src')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
