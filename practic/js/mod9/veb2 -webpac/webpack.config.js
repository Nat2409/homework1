module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env'],
        // },
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
