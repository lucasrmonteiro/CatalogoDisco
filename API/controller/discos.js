const discos = require('../models/').Discos;
const statusSucesso = 201;
const statusError = 400;

let controller = {

    createNewDisco(req, res) {
        return discos.create({
            Titulo: req.body.Titulo,
            Artista: req.body.Artista,
            colecaoId: req.body.colecaoId
        })
        .then(disco => res.status(statusSucesso).send(disco))
        .catch(error => res.status(statusError).send(error));
    },

    listAllDiscos(req ,res){
        return discos
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    },

    listAllDiscosByColecao(req ,res){
        return  discos.findAll({
            where: {colecaoId: req.params.colecaoId}
        })
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    },

    listAllDiscosByNome(req ,res){
        return  discos.findAll({
            where: {Titulo: req.params.titulo}
        })
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    },

    changeDiscos(req ,res){
        discos.find({
            where: {id: req.params.IdDisco}
        })
        .then(disco => {
            if(disco){
                disco.updateAttributes({
                    Titulo: req.body.Titulo,
                    Artista: req.body.Artista
                })
                .then(disco => res.status(statusSucesso).send(disco))
                .catch(error => res.status(statusError).send(error));
            }else{
                res.status(statusError).send("Disco Not found!")
            }
        });
    },

    deleteDisco(req,res){
        discos.destroy({
            where: {id: req.params.IdDisco}
        })
        .then(disco => res.status(statusSucesso).send(disco))
        .catch(error => res.status(statusError).send(error));
    }

};

module.exports = controller;