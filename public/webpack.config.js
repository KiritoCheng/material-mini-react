var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            "es6-promise",
            "react-redux",
            "react-router",
            "react-router-dom",
            "react-tap-event-plugin",
            "redux",
            "redux-thunk",
            "whatwg-fetch",
        ],
        index: './src/index.tsx'
    },

    output: {
        path: path.join(__dirname, './assets'),
        filename: '[name].js',
        publicPath: "/public/assets/",
    },

    cache: true,
    watch: true,

    watchOptions: {
        ignored: /node_modules/
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less']
    },

    resolveLoader: {
        modules: ['src', 'node_modules']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                importLoaders: 1,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.png|\.gif|\.jpg|\.jpeg/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'image/',
                            name: '[name]-[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                //文件大小小于1000000按url-loader转为DataUrl,否则走file-loader
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader?limit=1000000'
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            // PRODUCTION: JSON.stringify(false),
        }),
        new ExtractTextPlugin("style.css"),
        new CommonsChunkPlugin({ name: "vendor", minChunks: Infinity }),
        new CommonsChunkPlugin({ name: "manifest", minChunks: Infinity }),
        new HtmlWebpackPlugin({
            title: 'Index',
            filename: 'index.html',		//生成的html存放路径
            template: './index.html',	//html模板路径
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: false    //删除空白符与换行符
            }
        }),
    ],

    //webpack的本地服务器webpack-dev-server的配置
    devServer: {
        contentBase: path.join(__dirname, "./assets"),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        index: 'index.html',
        open: true,
        openPage: 'public/assets/',
        inline: true,
        // host: '192.168.9.151'
        // proxy: {
        //     // "**": "http://localhost:7878"
        // }
    }
};
