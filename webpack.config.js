const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'docs'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Output file name
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve files from the dist folder
    compress: true,
    port: 3000, // Port for the development server
  },
  mode: 'development', // Set mode to development or production
};