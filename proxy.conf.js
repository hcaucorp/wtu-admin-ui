// docs https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md

const PROXY_CONFIG = [
    {
        context: ["/api"],
        target: "http://localhost:8080",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        },
    }
];
module.exports = PROXY_CONFIG;
