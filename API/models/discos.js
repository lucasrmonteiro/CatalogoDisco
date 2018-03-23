'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discos = sequelize.define('Discos', {
    Titulo: DataTypes.STRING,
    Artista: DataTypes.STRING
  }, {});
  
  Discos.associate = function(models) {
    Discos.belongsTo(models.ColecaoDisco, {
      foreignKey: 'colecaoId',
      onDelete: 'CASCADE'
    });
  };

  Discos.ValidateModel = ((model) =>{

  });

  return Discos;
};