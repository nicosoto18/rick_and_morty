const axios = require("axios");
 const URL = "https://rickandmortyapi.com/api/character"  //`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`

const getCharById=(req, res)=>{
  const {id} = req.params
  axios.get(`${URL}/${id}`)
  .then(response => { 
    const data = response.data;   //me guardo solo la data de la resp
    
    if(data.name){  //me aseguro que me llegue la info 
    const {id, status,name,species,origin,image,gender} = data
    const character = {id,status,name,species,origin,image,gender}
    return res.json(character)
    
    }else{
      return res.status(404).send("Not Found")
    }
 })
  .catch( error=>{
   res.status(500).send(error.message);
   })
 
};


module.exports = getCharById;

