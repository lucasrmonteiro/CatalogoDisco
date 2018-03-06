const discos = require('../models/discos');
const statusSucesso = 201;
const statusError = 400;

let controller = {

    createNewDisco(req, res) {
        return discos.create({
            Titulo: req.body.Titulo,
            Artista: req.body.Artista
        })
        .then(disco => res.status(statusSucesso).send(disco))
        .catch(error => res.status(statusError).send(error));
    }

};

module.exports = controller;