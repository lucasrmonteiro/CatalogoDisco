'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Discos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Artista: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() =>{
      return queryInterface.addColumn('Discos', 'colecaoId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        after: 'id'
      });      
    }).then(() => {
      return queryInterface.addConstraint('Discos', [ 'colecaoId' ], {
        type: 'FOREIGN KEY',
        name: 'FK_colecaoId',
        references: {
            table: 'ColecaoDiscos',
            field: 'id'
        },
        onDelete: 'cascade'
    });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('FK_colecaoId', 'Discos').then(function() {
        return queryInterface.removeColumn('Discos', 'colecaoId');
    }).then(function() {
        return queryInterface.dropTable('Discos');
    });
  }
};