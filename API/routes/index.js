const discoController = require('../controller/discos');
const colecaoController = require('../controller/colecaoDiscos');

module.exports = (app) => {
    
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
      }));

      app.get('/disco/discos', discoController.listAllDiscos);
      app.get('/disco/discos/:titulo', discoController.listAllDiscosByNome);
      app.get('/disco/colecao/:colecaoId', discoController.listAllDiscosByColecao);
      app.post('/disco/create', discoController.createNewDisco);
      app.put('/disco/:IdDisco', discoController.changeDiscos);
      app.delete('/disco/:IdDisco', discoController.deleteDisco);

      app.post('/colecao/create' ,colecaoController.CreateNewColecao);
}