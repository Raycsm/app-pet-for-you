module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['@react-native-community', 'prettier'],
  rules: {
    "react-native/no-inline-styles": 0,
    'prettier/prettier': 0
  }
};
