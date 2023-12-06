const axios = require("axios");
 const URL = "https://rickandmortyapi.com/api/character"  //`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`

const getCharById = async (req, res)=>{
  try {
    const {id} = req.params
    const response = await axios.get(`${URL}/${id}`)
    const data = response.data;
      
    if(data.name){  //me aseguro que me llegue la info 
    const {id, status,name,species,origin,image,gender} = data
    const character = {id,status,name,species,origin,image,gender}
    return res.json(character)
    }else{
    return res.status(404).send("Not Found")
    }
  
  }catch (error) {
    res.status(500).send(error.message);
  } 
};


module.exports = getCharById;

