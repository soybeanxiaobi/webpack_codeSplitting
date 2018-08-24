const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');   //每次打包前先清除dist

module.exports = {
    entry:__dirname + '/client/routes/index.js',

    output:{
        path:path.join(__dirname + '/dist'),
        filename:'bundle.js',    //打包名字
        publicPath: '/',
        //按需加载
        chunkFilename:'[name]_[chunkhash:8].js'
    },

    module :{
        loaders: [{
            test : /(\.jsx|\.js)$/,
            exclude : /node_modules/,
            loader :'babel-loader',
            options :{
                presets:[
                    "env","react"
                ]
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }

        
        
        ]
    },

    plugins :[
        //  /client/views/index.html为模板
        new HtmlWebpackPlugin({
            template: __dirname + '/client/views/index.html'
        }),

        //清除dist内容,防止hash导致生成文件重复
        new CleanWebpackPlugin(['dist'])
    ]
}