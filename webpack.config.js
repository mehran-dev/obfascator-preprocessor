const path = require('path')

module.exports = {
  entry: './index.js', // Adjust the entry point as per your project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: path.resolve(__dirname, 'lib', 'obfascator.js'),
        },
      },
    ],
  },
}
