const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://v6.exchangerate-api.com/v6/d39eb2f40a872eff29a952df',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
