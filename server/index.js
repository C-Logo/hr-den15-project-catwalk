const path = require('path');
const express = require('express'); // npm installed
// const router = require('./routes.js');

const app = express();
module.exports.app = app;
app.set('port', 3000);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/*', router);

app.listen(3000, () => {
  console.log('listening on port: ', 3000);
});
