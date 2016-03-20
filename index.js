module.exports = {
  plugins: [
    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-syntax-decorators'),
    require('babel-plugin-syntax-object-rest-spread'),
    
    require('babel-plugin-transform-object-assign'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-decorators-legacy').default
  ]
}