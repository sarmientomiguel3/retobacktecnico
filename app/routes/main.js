const express = require('express');
const mapswapi = require('../utils/mapswapi.util');

const router = express.Router({
  mergeParams: true
});

router.get('/', mapswapi.main);
router.get('/:set', mapswapi.main);
router.get('/:set/:id', mapswapi.main);

module.exports = {
  router
};


