const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "modulo1-1": "./react-src/pages/modulo1-1.js",
    "modulo1-2": "./react-src/pages/modulo1-2.js",
    "modulo1-4": "./react-src/pages/modulo1-4.js",
    "modulo1-5": "./react-src/pages/modulo1-5.js",
    "modulo2-1": "./react-src/pages/modulo2-1.js",
    "modulo2-2": "./react-src/pages/modulo2-2.js",
    "modulo2-3": "./react-src/pages/modulo2-3.js",
    "modulo2-4": "./react-src/pages/modulo2-4.js",
    "modulo3-1": "./react-src/pages/modulo3-1.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./app/",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "app/assets/react-dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|m4a)$/,
        use: ["file-loader"],
      },
    ],
  },
};
