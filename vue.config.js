module.exports = {
  pwa: {
    name: "Ferry Anggriawan"
  },

  publicPath: process.env.NODE_ENV === "production" ? "docs/" : "/",
  outputDir: "docs",
  assetsDir: "",
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true
  }
};
