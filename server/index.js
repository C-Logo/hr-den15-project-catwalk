const path = require('path');
const express = require('express'); // npm installed
const router = require('./routes.js');

const app = express();
app.set('port', 3000);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/reviews', router);
app.use('/products', router);
app.use('/qa/questions', router);

// app.use('/*', router);

app.listen(3000, () => {
  console.log('listening on port: ', 3000);
});

module.exports.app = app;
