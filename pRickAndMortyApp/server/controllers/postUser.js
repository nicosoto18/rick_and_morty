const {User} = require("../src/DB_connection");

const postUser = async (req,res)=>{   //envia datos al servidor 
   try {
      const {email, password} = req.body;
      if(email && password){
      const newUser = await User.findOrCreate({
        where : {email, password}
      })
      return res.json(newUser);
      }
      return res.status(400).send("faltan datos");
   } catch (error) {
     return res.status(500).send(error.message);
     }
  
  
  
};

module.exports= postUser;