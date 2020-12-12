const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ASSET_PATH = process.env.ASSET_PATH || '/dist/'

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    //devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            /*{
                test: /\js(x)?$/,
                loader: "babel-loader",
                //query: { presets: ["@babel/react"] }
            },*/
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    /*resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@material-ui/core': '@material-ui/core/es'
        }
    },*/
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    /*devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },*/
    // devServer to avoid being blocked by CORS policy when developing in localhost
    devServer: {
        proxy: {
            "^/api": {
                target: "http://localhost:5000/fullstack-todo-ba690/us-central1", // Emulator's url
                pathRewrite: {
                    "^/api": ""
                },
                ws: true,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}