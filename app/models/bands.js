const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {}
  Band.init({
    BandId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    BandName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BandOrigin: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BandGenere: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  },{
    sequelize,
    modelName: 'bands',
    tableName: 'bands',
    timestamps: false
  });
  
  return Band;
};
