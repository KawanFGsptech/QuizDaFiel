var express = require("express");
var router = express.Router();

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarNota", function (req, res) {
    resultadoController.cadastrar(req, res);
})

module.exports = router;