const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      //=================================
      //=================================
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      // "If you are using inject on your configuration, ensure that HtmlWebpackPlugin appears before WebpackPwaManifest in the plugins array!"
      //=================================
      //=================================
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      // https://www.npmjs.com/package/webpack-pwa-manifest
      // ^^^^ Outlines the usage ^^^^
      new WebpackPwaManifest({
        name: "JATE",
        short_name: "JATE",
        description: "Just Another Text Editor",
        display: "standalone",
        background_color: "#1e1e1e",
        theme_color: "#1e1e1e",
        start_url: "/",
        publicPath: "/",
        fingerprints: true,
        inject: true,
        icons: [
          {
            src: path.resolve("src/images/logo.png"), // Tell the app where to find the needed images
            sizes: [96, 128, 192, 256, 384, 582], // Multiple sizes
            destination: path.join("assets", "icons"),
          },
        ],
      }),
      // "When you use injectManifest, you're responsible for wiring up precaching logic.
      // When injectManifest examines your input service worker, it looks for a special self.__WB_MANIFEST variable and replaces it with the precache manifest.
      // If this variable isn't present, injectManifest will throw an error."
      // "ERROR in Can't find self.__WB_MANIFEST in your SW source."
      new InjectManifest({
        // InjectManifest injects our custom service worker
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
    ],

    module: {
      rules: [
        //=================================
        //=================================
        // TODO: Add CSS loaders and babel to webpack.
        //=================================
        //=================================
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: "asset/resource", //files destination
        },
        {
          test: /\.m?js$/,
          exclude: /node_modues/,
          use: {
            // https://webpack.js.org/loaders/babel-loader/
            // https://www.robinwieruch.de/webpack-babel-setup-tutorial/
            // "By using Babel, the code which isn't supported yet, will get transpiled back to vanilla JavaScript so that every environment (e.g. browser) can interpret it."
            loader: "babel-loader", // converts syntax
            options: {
              // https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-GenerateSWConfig
              // https://www.npmjs.com/package/babel-loader
              // Configures GenerateSW
              presets: ["@babel/preset-env"],
              "plugins": [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
