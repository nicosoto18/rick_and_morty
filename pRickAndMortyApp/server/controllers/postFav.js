const {Favorite} = require("../src/DB_connection");


const postFav = async(req,res)=>{
   try {
    const {id,name,origin,status,image,species,gender} = req.body;  
    if(id && name && origin && status && image && species &&gender){
    await Favorite.findOrCreate({
      where : {id,name,origin,status,image,species,gender}}); //creamos un favorito
    const allFavorites = await Favorite.findAll();    //buscamos todos los fav y los guardamos en la variable
    return res.status(200).json(allFavorites);        //retornamos los fav
    }
    return res.status(401).send("Faltan datos");

   }catch (error) {
    return res.status(500).send(error.message);
   }
}

module.exports = postFav;