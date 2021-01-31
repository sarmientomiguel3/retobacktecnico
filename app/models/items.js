
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {}
  Item.init({
    ItemId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ItemCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ItemName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ItemDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  },{
    sequelize,
    modelName: 'items',
    tableName: 'items'
  });

  return Item;
};
