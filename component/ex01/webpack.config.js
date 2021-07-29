const path = require('path');

module.exports = (env) => {
    const entry = path.resolve(`src/${env.src}/index.js`);
    return {
        entry: entry,
        output: {
            path: path.resolve("public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        },
        devtool: "eval-source-map", 
        devServer: {
            contentBase: path.resolve("public"),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true,
        }
    }
}