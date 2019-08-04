var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/js/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015', 'stage-0'],
          env: {
            "development": {
              presets: ['react-hmre']
            }
          },
          plugins: ["transform-class-properties", "transform-decorators-legacy", "@babel/plugin-transform-regenerator"]
        }
      }
    ]
  }
};
