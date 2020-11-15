const loaderUtils = require('loader-utils');
const Minimize = require('minimize');
// 同步loader
// module.exports = function(source) {
//     // 获取webpack.config.js中对该loader的配置项
//     const options = loaderUtils.getOptions(this) || {}
//     console.log(options);
//     const minimize = new Minimize(options);
//     return minimize.parse(source);
// }

// 异步loader 可以不阻碍其他文件的解析

module.exports = function(source) {
    const options = loaderUtils.getOptions(this) || {};
    const callback = this.async();
    const minimize = new Minimize(options);
    if(this.cacheable){
        this.cacheable();
    }
    minimize.parse(source,callback);
}