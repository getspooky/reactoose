const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dev = process.env.NODE_ENV === 'dev';

const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },

    resolve: {
        // Add `.ts` , `.tsx` , `.js` , `.jsx` , `.css` , `.scss` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js",".jsx","css","scss"]
    },

    module: {
        rules: [
            {
                test:/\.tsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'ts-loader'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader','sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]'
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'reactoose',
            template: path.resolve(__dirname, 'public','index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            disable:dev
        })
    ]
};


module.exports = config;