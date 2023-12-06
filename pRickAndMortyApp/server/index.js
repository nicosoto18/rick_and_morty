const express = require ("express")
const morgan = require("morgan")
const server = express()
const PORT = 3001;
const router = require("./routes/index") 

//middleware para configurar los encabezados CORS, recordemos que esto nos da acceso dentro de todos los front
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);  //cuando reciba rickandmorty barra algo el resto lo buscamos en router

server.listen(PORT,()=>{
   console.log("Server raised in port: " + PORT);
});





