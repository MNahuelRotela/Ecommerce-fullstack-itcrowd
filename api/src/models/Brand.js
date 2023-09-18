const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Brand = sequelize.define('Brand', {
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });



    return Brand;
};
