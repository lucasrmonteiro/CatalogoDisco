'use strict';
module.exports = (sequelize, DataTypes) => {
  var ColecaoDisco = sequelize.define('ColecaoDisco', {
    Id: DataTypes.BIGINT,
    NomeColecao: DataTypes.STRING
  }, {});

  ColecaoDisco.associate = function(models) {
    ColecaoDisco.hasMany(models.ColecaoDisco, {
      foreignKey: 'colecaoId',
      onDelete: 'CASCADE'
    });
  };

  ColecaoDisco.associate = function(models) {
    // associations can be defined here
  };

  return ColecaoDisco;
};