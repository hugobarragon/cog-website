const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
  }),
  // enable legacy decorators babel plugin
  addLessLoader({ lessOptions: { javascriptEnabled: true } }),
);
