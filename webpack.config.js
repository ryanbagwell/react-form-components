import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import ForceCaseSensitivityPlugin from 'force-case-sensitivity-webpack-plugin';


export default {

  stats: 'verbose',

  context: path.resolve(__dirname, 'src'),

  entry: {
    'index': 'index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "commonjs2",
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    }),
    new ForceCaseSensitivityPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js',],
    symlinks: false,
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

};
