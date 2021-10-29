const express = require('express');
const controller = require('./controllers');

const router = express.Router();

// router.get('/products', controller.products.get);

router.route('/meta')
  .get((req, res) => {
    console.log(res);
    res.send('test');
  });

module.exports = router;
