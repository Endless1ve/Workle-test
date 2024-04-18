const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Workle-test/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
});
