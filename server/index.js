const path = require('path');
const express = require('express'); // npm installed
const { createProxyMiddleware } = require('http-proxy-middleware');

// https://www.npmjs.com/package/http-proxy-middleware

// proxy middleware options
// GITHUB TOKEN AS THE EXPECTED AUTHENTICATION HEADER
const options = {
  target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/', // target host FILL THIS IN
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api/old-path': '/api/new-path', // rewrite path
    '^/api/remove/path': '/path', // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'dev.localhost:3000': 'http://localhost:8000',
  },
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);

// mount `exampleProxy` in web server
const app = express();
app.use('/api', exampleProxy);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
// other configuration...

app.listen(3000);
