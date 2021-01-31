const express = require('express');
const bandcontroller = require('../controllers/band.controller');

const router = express.Router({
  mergeParams: true
});

router.get('/', bandcontroller.bandselectall);

router.post('/', bandcontroller.bandadd);

module.exports = {
  router
};


