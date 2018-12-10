const PROXY_CONFIG = [
    {
        context: ["/wallets"],
        target: "http://localhost:8080",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/wallets": "/wallets"
        }
    }
];
module.exports = PROXY_CONFIG;
