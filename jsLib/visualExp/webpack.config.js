const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "development",
  output: {
    path: path.resolve("./"),
    filename: "index.js",
    library: "VisualExp",
    // Expose the default export.
    libraryExport: "default"
  }
};
