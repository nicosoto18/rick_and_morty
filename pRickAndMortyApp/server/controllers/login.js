const {User} = require("../src/DB_connection");

const login = async(req,res)=>{
  try {
    const {email,password} = req.query;
    
    if(email && password){
    const usuarioBuscado = await User.findOne({
    where: {email:email}                 //si encontro algo lo traera en un objeto, si no traera undefined
    });
      if(usuarioBuscado){
         if(usuarioBuscado.password===password){
         return res.status(200).json({access: true})
         }
         return res.status(403).send("Contraseña incorrecta")
      }
      return res.status(404).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan datos")

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = login; 