const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browerslist 한국에서 브라우저 점유율이 5%이상인 것은 다 지원하겠다.
            },
            debug: true,
          }], 
          '@babel/preset-react'
        ],
        plugins: [],
      }
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }), // loader의 options의 debug: true를 넣어주는 것.
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
};