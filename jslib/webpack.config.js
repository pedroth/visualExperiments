const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/Pedroth/Pedroth.js",
  output: {
    path: path.resolve("./dist/"),
    filename: "index.js",
    library: "Pedroth",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              [
                "@babel/plugin-transform-runtime",
                { corejs: 3, useESModules: true, helpers: true }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
