const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not",
      validate: {
        len: [2, 50],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not",
      validate: {
        len: [2, 50],
      },
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "El campo usuario no puede estar vacío",
        },
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};