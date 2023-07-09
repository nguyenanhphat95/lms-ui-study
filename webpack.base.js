const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { argv } = require('yargs');

const isBuildDocs = argv['docs'];

// For our css modules these will be locally scoped
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[local]_[hash:base64:4]'
    },
    importLoaders: 2,
    sourceMap: true // turned off as causes delay
  }
};

// For our normal CSS files we would like them globally scoped
const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: 'global',
    importLoaders: 2,
    sourceMap: false // turned off as causes delay
  }
};

// Our PostCSSLoader
const PostCSSLoader = {
  loader: 'postcss-loader'
};

// Standard style loader (prod and dev covered here)
const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

const output =
  devMode || isBuildDocs
    ? {}
    : {
        // required
        globalObject: "(typeof self !== 'undefined' ? self : this)"
      };

const plugins =
  devMode || isBuildDocs
    ? []
    : [
        new StaticSiteGeneratorPlugin({
          crawl: true,
          path: ['/'],
          globals: {
            window: {}
          }
        })
      ];

module.exports = options => {
  let outputDir = path.resolve(__dirname, 'dist');

  return {
    mode: options.mode,
    entry: {
      index: './src/index.ts'
    },
    node: {
      fs: 'empty'
    },
    output: {
      path: outputDir,
      filename: '[name].js',
      library: '@fundoo/ui',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      ...output
    },
    optimization: options.optimization,
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, CSSLoader, PostCSSLoader, 'sass-loader']
        },
        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, CSSModuleLoader, PostCSSLoader, 'sass-loader']
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024,
                noquotes: true
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  enabled: false
                  // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                  // Try enabling it in your environment by switching the config to:
                  // enabled: true,
                  // progressive: true,
                },
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  // quality: '65-90',
                  speed: 4
                }
              }
            }
          ]
        }
      ]
    },
    plugins: options.plugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/styles'),
            to: `${outputDir}/styles`
          }
        ]
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname
        }
      }),
      ...plugins
    ]),
    resolve: {
      ...(options.resolve && options.resolve),
      alias: {
        '@App': path.resolve(__dirname, 'src/'),
        '@fundoo/ui': path.resolve(__dirname, 'src/'),
        '@fundoo/ui/hooks': path.resolve(__dirname, 'src/utils/hooks/')
      },
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
    externals: ['react', 'react-dom', 'classnames', 'prop-types']
  };
};
