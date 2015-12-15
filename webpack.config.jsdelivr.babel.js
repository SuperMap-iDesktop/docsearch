export default {
  entry: './index.js',
  output: {
    path: './dist/cdn',
    filename: 'docsearch.js',
    library: 'docsearch',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel'
    }]
  },
  externals: [],
  plugins: []
};