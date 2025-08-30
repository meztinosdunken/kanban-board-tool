const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Module configuration with rules for processing files
  module: {
    rules: [
      {
        test: /.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Specify presets
          }
        }
      }
    ]
  },
  // Resolve extensions for module imports
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000 // Port for the development server
  }
};