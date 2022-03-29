module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/comma-dangle': ['off'],
    'vue/first-attribute-linebreak': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    'vue/html-indent': ['warn', 2, {
      alignAttributesVertically: false
    }]
  }
}
