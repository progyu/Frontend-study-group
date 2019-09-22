const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다?
  resolve: {
    extensions: ['.js', '.jsx']
  },// entry에 파일 확장명 부분을 등록하여 자동으로 찾게해준다.
  
  // 가장 중요한 두 부분
  entry: {
    app: ['./client'], // client.jsx에서 wordRelay.jsx 파일을 이미 불러오고 있기 때문에 아래와 같이 쓰지 않아도 된다.
    // app: ['./client.jsx', 'wordRelay.jsx'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/, // 정규표현식, js파일과 jsx 파일에 이 rule을 적용하겠다.
      loader: 'babel-loader', // 어떤 룰을 적용할 것인지 설정.
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browerslist 한국에서 브라우저 점유율이 5%이상인 것은 다 지원하겠다.
            },
            // debug: true,
          }], 
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ],
      }
    }],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }), // loader의 options의 debug: true를 넣어주는 것.
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 현대 폴더 안에 있는 dist 라는 의미
    filename: 'app.js',
    publicPath: '/dist/',
  }, // 출력
};