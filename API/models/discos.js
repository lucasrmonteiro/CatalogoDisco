'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discos = sequelize.define('Discos', {
    Titulo: DataTypes.STRING,
    Artista: DataTypes.STRING,
    "colecaoId": DataTypes.BIGINT
  }, {});
  Discos.associate = function(models) {
    Discos.hasOne(models.ColecaoDisco, {
      foreignKey: 'id',
      as: 'ColecaoDisco',
    });
  };

  Discos.ValidateModel = ((model) =>{

  });

  return Discos;
};