module.exports = {
    runtimeChunk: {
        name: 'manifest'
    },
    splitChunks: {    
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        },
        // test: /.js$/,
        name: 'common-chunk',
        chunks: 'initial',
        // priority: 1,
        // minChunks: 2
    }
    
}