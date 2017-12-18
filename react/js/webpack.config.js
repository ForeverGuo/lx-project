/**
 * Created by hasee on 2016/9/26.
 */


module.exports = (function( ) {
    var config = {
        /*入口文件*/
        entry:{
            build:'./src/js/main'
        },
        /*出口文件*/
        output: {
            path: "./app",/*to*///编译到的目录
            filename: 'build.js'//编译后的文件名字
        },
        module: {
            loaders: [
                {   test: /\.(js|jsx)$/,
                    loader: "jsx-loader",
                    exclude: /^node_modules$/ /*排除*/
                },
                {
                    test: /\.(scss|css)$/,
                    loaders: ['style', 'css', 'sass'],
                    exclude:/^node_modules$/
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url?limit=40000',
                    exclude:/^node_modules$/
                }
            ]
        }/*,
        //服务器
        devServer: {
            historyApiFallback: true,
            inline: true,
            progress: true,
            host: 'localhost',
            port: 80
        },*/
        /*支持webpack的资源调试
        devtool:'source-map'*/
    };
    return config;
})();
