module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true

  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'airbnb-base'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "import/no-named-as-default": 0,

  },
};
