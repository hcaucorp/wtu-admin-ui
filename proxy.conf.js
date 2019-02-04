// docs https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
// https://github.com/angular/angular-cli/wiki/stories-proxy
// https://webpack.js.org/configuration/dev-server/#devserver-proxy

const PROXY_CONFIG = [
    {
        context: ["/api"],
        target: "http://localhost:8080",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    }
];
module.exports = PROXY_CONFIG;
