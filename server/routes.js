const express = require('express');
const axios = require('axios');
const controller = require('./controllers');
const access_token = require('../config.js');

const router = express.Router();

// router.get('/products', controller.products.get);

router.route('')
  .get((req, res) => {
    console.log('access', access_token);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/meta?product_id=44388',
      {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((err, data) => {
        if (err) {
          throw err;
        } else {
          res.send(data);
        }
      })
      .catch(() => {
        console.log('error in axios promise');
        res.send('axios not working');
      });
  });

module.exports = router;
