const { resolve } = require('../utils')

module.exports = [
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
            loader: 'url-loader',
            options: {
                imit: 3*1024
             }
        },
        include: resolve('../src')
    }
]