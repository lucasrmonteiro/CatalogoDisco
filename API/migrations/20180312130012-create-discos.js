'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Discos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      Titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Artista: {
        type: Sequelize.STRING,
        allowNull: false
      },
      colecaoId: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'ColecaoDiscos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Discos');
  }
};