var router = require('express').Router();

router.route('/')
    .get(function(req, res) {
      res.send('Something comes here');
    });

router.route('/:hello')
    .get(function(req, res) {
      res.send('Something first');
    });

module.exports = router;
