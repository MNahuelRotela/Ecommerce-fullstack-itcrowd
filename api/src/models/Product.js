const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    img_url: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    finalPrice: {
      type: DataTypes.VIRTUAL,
      get() {
        const price = this.getDataValue('price');
        const discountPercentage = this.getDataValue('discountPercentage');
        const total = price - (price * discountPercentage) / 100;
        return parseInt(total.toFixed(0));
      },
    },
    sold_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });



  return Product;
};