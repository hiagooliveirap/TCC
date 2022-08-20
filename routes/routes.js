const express = require('express');
const db = require("../database/connection");
const router = express.Router();

const CidadesController = require("../controllers/cidades_controller");

router.get('/cidades', CidadesController.listaCidades);

module.exports = router;