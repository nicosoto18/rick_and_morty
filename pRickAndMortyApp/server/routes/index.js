const express = require("express");
const router = express.Router();   //el router es la funcion que nos permite modularizar con express

//traemos todos nuestras funciones y componentes para hacer las rutas
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser")
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

//todo lo que sea localhost/rickandmorty/character/algo mas va a venir a buscar el resto de la url aca
//esta configurado el resto en el index principal 
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);


//exporto el router
module.exports = router; 

