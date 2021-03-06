const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const { API_URL, API_KEY } = require('../config');

const app = express();
app.set('port', 3000);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('*', (req, res) => {
  // format URL's on frontend
  axios({
    method: req.method.toLowerCase(),
    // url: `localhost:3000${req.originalUrl}`,
    url: API_URL + req.originalUrl,
    headers: {
      Authorization: API_KEY,
    },
    data: req.body,
  }).then((response) => {
    res.send(response.data);
  })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

app.listen(3000, () => {
  console.log('listening on port: ', 3000);
});

module.exports.app = app;
