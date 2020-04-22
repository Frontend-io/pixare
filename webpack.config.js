var path =  require('path')

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'transpiled.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,  
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015', 'react']
                }   
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}