const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    URL
} = process.env;

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
});


const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

//Models
const {
  Category,
  Brand,
  Product,
  User,
  Subcategory,
  
} = sequelize.models;

//Entity-relations
Product.belongsTo(Subcategory);
Subcategory.hasMany(Product);

Product.belongsTo(Category);
Category.hasMany(Product);

Product.belongsTo(Brand);
Brand.hasMany(Product);
 Category.hasMany(Subcategory);
Subcategory.belongsTo(Category);


    module.exports = {
      sequelize, 
      ...sequelize.models,
    };