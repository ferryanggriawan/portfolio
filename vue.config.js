module.exports = {
  pwa: {
    name: "Ferry Anggriawan"
  },

  publicPath: process.env.NODE_ENV === "production" ? "docs/" : "/",
  outputDir: "docs",
  assetsDir: "",
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,
  css: {
    modules: true
  }
};
