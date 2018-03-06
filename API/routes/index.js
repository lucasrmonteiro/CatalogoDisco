const discoController = require('../controller')

module.exports = (app) => {
    
    app.get('/disco', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
      }));

      app.post('/disco/create', todosController.create);
}