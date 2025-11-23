const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/main.tsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name].[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash][ext]'
                }
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        }
    },

    devServer: {
        static: './dist',
        port: 8080,
        hot: true,
        open: true
    },

    devtool: isDevelopment ? 'source-map' : false
};
