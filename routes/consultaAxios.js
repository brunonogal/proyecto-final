const express = require('express');
const router = express.Router();
const { consultaAxios } = require('../controllers/productoController');

router.get('/', consultaAxios)

module.exports = router;