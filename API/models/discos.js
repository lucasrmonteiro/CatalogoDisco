'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discos = sequelize.define('Discos', {
    Titulo: DataTypes.STRING,
    Artista: DataTypes.STRING
  }, {});
  Discos.associate = function(models) {
    // associations can be defined here
  };

  Discos.ValidateModel = ((model) =>{

  });

  return Discos;
};