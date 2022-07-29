module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-react',
    '@typescript-eslint',
    'jest-dom', // 추가됨
    'testing-library', // 추가됨
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:testing-library/react', // 추가됨
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    // 추가됨
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
};
