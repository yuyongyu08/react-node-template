var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({ data: {features: ['react-router', 'redux', 'react-native']} });
});

module.exports = router;
