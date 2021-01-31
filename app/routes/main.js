const express = require('express');
const mapswapi = require('../utils/mapswapi.util');

const router = express.Router({
  mergeParams: true
});

router.get('/', mapswapi.main);

module.exports = {
  router
};


