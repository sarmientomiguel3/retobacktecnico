const express = require('express');
const itemcontroller = require('../controllers/item.controller');

const router = express.Router({
  mergeParams: true
});

router.get('/', itemcontroller.itemselectall);

router.post('/', itemcontroller.itemadd);

module.exports = {
  router
};


