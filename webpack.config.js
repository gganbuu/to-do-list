// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import autoprefixer from "autoprefixer";

export default {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  ignoreWarnings: [
    (warning) =>
      warning.message.includes("Deprecation Warning") &&
      warning.module?.resource?.includes("node_modules/bootstrap")
  ],
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: true
              }
            }
          ]
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true,
                  // Optional: Silence Sass deprecation warnings. See note below.
                  silenceDeprecations: [
                    'color-functions',
                    'global-builtin',
                    'import'
                  ]
                }
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]', // Optional: keeps fonts in a subfolder
        },
      },
      ]
    }
    
  }
