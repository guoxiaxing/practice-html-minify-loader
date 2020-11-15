const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
module.exports = {
    mode:'development',
    devServer:{
        port: 8080,
        contentBase: path.join(__dirname,'./dist'),
        hot: true
    },
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname,'./dist/'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.html$/,
            use:['html-loader', {
                loader: 'html-minify-loader',
                options:{
                    // 保留html中的注释 不配置则默认删除注释
                    comments: true
                }
            }]
        }]
    },
    // 定义 查找loader的路径
    resolveLoader:{
        modules: [path.join(__dirname,'./src/loaders'),'node_modules']
    },
    plugins:[
        // 自动生成一个index.html将我们打包后的文件自动引入
        new HtmlWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ]
}