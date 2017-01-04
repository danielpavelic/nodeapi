'use strict';
var express = require('express'),
    router = express.Router()

/*router.use(function (req, res, next) {
  if (req.user === 'user') {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
})*/

router.use('/catalog', require('./catalog'))

router.get('/', function(req, res) {
  res.send('Home page loaded')
});

module.exports = router