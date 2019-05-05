module.exports = {
    webpack: function(config, env) {
        if (env === 'development') {
            config.module.rules.push({
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                    },
                ],
            })
        }

        return config
    },
}
