let myFavorites = []; //importante que sea con let ya que se va a modificar

const postFav = (req, res) => {
   //* en req.body me llegaria el character completo
   myFavorites.push(req.body);
    return res.json(myFavorites);  //le devuelvo al front todos mis favoritos
   };
  


   const deleteFav = (req, res) => {
    const { id } = req.params;
//debo filtar myFavorites y filtrar todos los personajes y sacar el que te manden por id 
    myFavorites = myFavorites.filter(
      char => char.id !== Number(id) //en miFavorites me estoy quedando con todos los que sean distintos al q me paso por params
    );                               
    return res.json(myFavorites);
  };
  


module.exports = {deleteFav, postFav};