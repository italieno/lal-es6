module.exports = {
    entry : "./main",
    output: {
        filename: "app.js"
    },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}