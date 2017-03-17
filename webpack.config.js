import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const compiler = webpack({
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
});

export const WDServer = new WebpackDevServer(compiler, {
  contentBase: "/public/",
  proxy: {"/graphql": `http://localhost:${8080}`},
  publicPath: "/public/",
  stats: {colors: true}
});