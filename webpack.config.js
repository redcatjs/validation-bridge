module.exports = {
  entry: {
    'browser': ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    library: 'validation-bridge',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'validator': {
      commonjs: 'validator',
      commonjs2: 'validator'
    },
    'siret': {
      commonjs: 'siret',
      commonjs2: 'siret'
    },
    'typeable': {
      commonjs: 'typeable',
      commonjs2: 'typeable'
    },
    'xss-filters': {
      commonjs: 'xss-filters',
      commonjs2: 'xss-filters'
    },
    'dompurify': {
      commonjs: 'dompurify',
      commonjs2: 'dompurify'
    },
    'sanitize-html': {
      commonjs: 'sanitize-html',
      commonjs2: 'sanitize-html'
    },
    'mysql-validator': {
      commonjs: 'mysql-validator',
      commonjs2: 'mysql-validator'
    },
    'async-validator': {
      commonjs: 'async-validator',
      commonjs2: 'async-validator'
    },
    'bluebird': {
      commonjs: 'bluebird',
      commonjs2: 'bluebird'
    }
  },
  devtool: 'source-map'
}
