const colecao = require('../models/').ColecaoDisco;
const statusSucesso = 200;
const statusError = 400;

let controller = {
    
    CreateNewColecao(req,res){
        return colecao
        .create({
            NomeColecao: req.body.nome,
        })
        .then(todo => res.status(statusSucesso).send(todo))
        .catch(error => res.status(statusError).send(error));
    },
    ListAllColecao(req, res) {
        
        return colecao
          .all()
          .then(todos => res.status(statusSucesso).send(todos))
          .catch(error => res.status(statusError).send(error));
      }
};

module.exports = controller;