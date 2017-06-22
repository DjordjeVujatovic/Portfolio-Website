const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('postcss-nesting'),
        require('autoprefixer')({ browsers: 'last 2 versions' }),
      ],
    },
  },
];

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true,
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: { presets: ['es2015', 'es2016', 'es2017'] },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};

