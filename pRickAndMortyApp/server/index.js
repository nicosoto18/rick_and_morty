const http = require ("http") 
const PORT = 3001
const characters = require("./utils/data");
const { stringify } = require("querystring");
console.log(characters)

http.createServer((req, res)=>{
 res.setHeader('Access-Control-Allow-Origin', '*');  //esta linea le da acceso a cualquier front 
  
  if(req.url.includes("/rickandmorty/character")){
    const id = req.url.split("/").pop(); //aca creando un nuevo elemento en un array cada vez que me encuentre con una / y luego me quedo con el ultimo (que sera el id)
     const character = characters.find(
        char => char.id === Number(id) 
     );
     if(character){ 
       return res
        .writeHead(200, {"content-type": "application/json"})
        .end(JSON.stringify(character));
     } else{
        return res
        .writeHead(404, {"content-type" : "application/json"})
        .end(JSON.stringify({message: "character Not Found"}));
     }
       }

     return res
     .writeHead(404, {"content-type" : "application/json"})
     .end(JSON.stringify({message: "Wrong url"}));

}).listen(PORT,"127.0.0.1",()=>(console.log(`Server listening on port ${PORT}`))
);