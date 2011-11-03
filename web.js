var http = require('http'),
    httpProxy = require('http-proxy');
    port = process.env.PORT || 8000;
httpProxy.createServer(function (req, res, proxy) {
  res.setHeader('Access-Control-Allow-Origin', process.env.YAPP_S3PROXY_CORS_ALLOW_ORIGIN);
  req.headers['Host'] = 's3.amazonaws.com';
  proxy.proxyRequest(req, res, {
    host: 's3.amazonaws.com',
    port: 80
  });
  res
}).listen(port);
