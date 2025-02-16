const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: path.join(__dirname, "dist"),
    port: 3003,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./EmailApp": "./src/App.js",
      },
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js", // Add this line
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
