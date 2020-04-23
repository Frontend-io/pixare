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
                test: /\.jsx?$/,  
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }   
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        historyApiFallback: true
    }
}