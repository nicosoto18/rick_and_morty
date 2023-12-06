const users = require("../utils/users")

const login = (req,res)=>{

  const {email,password} = req.query
  let acces = false;
  users.forEach((user) =>{
  if(user.email===email && user.password===password){
    acces = true} 
  });

  return res.json({acces})
  
}

module.exports = login; 