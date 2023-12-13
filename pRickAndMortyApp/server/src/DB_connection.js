require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const favoriteModel = require ("./models/Favorite");
const userModel = require("./models/User");


const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

favoriteModel(sequelize);
userModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;
 
 User.belongsToMany(Favorite, {through: "characterEpisode"});
 Favorite.belongsToMany(User, {through: "characterEpisode"});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
