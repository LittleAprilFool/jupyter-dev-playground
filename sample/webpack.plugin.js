const path = require('path');
const mode = process.env.NODE_ENV;

module.exports = {
    mode,
    devtool: 'inline-source-map',
    entry: './sample/src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'        
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'amd',
    }
}