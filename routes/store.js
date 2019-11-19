const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/store', (req, res, next) => {
  res.render('./store/store');
});

module.exports = router;
