const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const { defineConfig } = require("@vue/cli-service");

// 生成manifest文件
const manifest =
  process.env.NODE_ENV === "production"
    ? {
        from: path.resolve("src/manifest.production.json"),
        to: `${path.resolve("dist")}/manifest.json`,
      }
    : {
        from: path.resolve("src/manifest.development.json"),
        to: `${path.resolve("dist")}/manifest.json`,
      };

//生成background.js
const bgjs = {
  from: path.resolve("src/background.js"),
  to: `${path.resolve("dist")}/js/background.js`,
};

//生成content.js
const ctjs = {
  from: path.resolve("src/content.js"),
  to: `${path.resolve("dist")}/js/content.js`,
};

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false, // 为 false 来关闭文件名哈希。
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  //多页面，popup.html,options.html
  pages: {
    popup: {
      template: "public/index.html",
      entry: "./src/popup/main.js",
      title: "Popup",
    },
    options: {
      template: "public/index.html",
      entry: "./src/options/main.js",
      title: "Options",
    },
  },
  chainWebpack: (config) => {
    config.plugin("copy").use(CopyWebpackPlugin, [
      {
        patterns: [
          manifest,
          bgjs,
          ctjs,
          {
            from: path.resolve("public/icons/"),
            to: `${path.resolve("dist")}/icons/`,
          },
          {
            from: path.resolve("public/favicon.ico"),
            to: `${path.resolve("dist")}/favicon.ico`,
          },
        ],
      },
    ]);
  },
  css: {
    //输出css
    extract: false,
  },
});
//屏蔽生成-legacy文件,找到.browserslistrc。后面添加一句话即可 not ie <= 11
//package.json更改为 "serve": "vue-cli-service build --mode development --watch",
