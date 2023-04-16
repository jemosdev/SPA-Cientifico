//allow to access where we are in directory
const path = require('path'); 
//file or plugin to work with HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

//all the setting to export
module.exports = {
    entry: './src/index.js', //entry point where live the code
    output: {
        path: path.resolve(__dirname, 'dist'), //send the project to production, creating the directory called dist
        filename: 'main.js' //final name to production
    },
    resolve: {
        extensions: ['.js'] //extensions to use
    },
    module: {
        rules: [//module with rules to use
            {
                test: /\.js?$/,//allow identify the files in the place
                exclude: /node_modules/,//exclude node_module directory
                use: {
                    loader: 'babel-loader'//use a loader to work
                }
            }
        ]
    },
    plugins: [//plugins to use
        new HtmlWebpackPlugin([//allow to work with HTML files
            {
                inject: true,//how to inject a value to HTML file
                template: './public/index.html',//path where the main template is
                filename: './index.html'//name that will have the file
            }
        ])
    ]
}