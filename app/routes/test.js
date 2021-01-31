const express = require('express');
const utiltest = require('../utils/test.util');

const router = express.Router({
  mergeParams: true
});

router.get('/', utiltest.test);

module.exports = {
  router
};
