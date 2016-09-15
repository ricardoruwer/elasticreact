module.exports = {
    entry: './src/index.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: process.env.PORT || 3333
    }
}
