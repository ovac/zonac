var router = require('express').Router();

var iresponse = {
  'type': 'response',
  'message': 'hello',
  'clientState': 'state of the client'
};
router.route('/')
  .post(function(req, res) {
    res.json(iresponse);
    console.log(req.body);
  });

router.route('/:hello')
  .get(function(req, res) {
    res.send('Something first');
  });

module.exports = router;
