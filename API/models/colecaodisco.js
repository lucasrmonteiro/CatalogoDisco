'use strict';
module.exports = (sequelize, DataTypes) => {
  var ColecaoDisco = sequelize.define('ColecaoDisco', {
    NomeColecao: DataTypes.STRING
  }, {});
  ColecaoDisco.associate = function(models) {
    // associations can be defined here
  };

  ColecaoDisco.associate = (models) => {
    ColecaoDisco.hasMany(models.Discos, {
      foreignKey: 'discoId',
      as: 'Discos',
    });
  };

  return ColecaoDisco;
};