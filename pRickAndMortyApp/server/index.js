const express = require ("express")
const morgan = require("morgan")
const server = express()
const PORT = 3001;
const router = require("./routes/index") 
const {conn} = require("./src/DB_connection")



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
server.use(morgan("dev")); //ES UN MIDDLEWARE QUE RECIBE A LA REQUEST Y LUEGO LA LIBERA PARA Q SIGA SU CAMINO 

server.use("/rickandmorty", router);  //cuando reciba rickandmorty barra algo el resto lo buscamos en router

try {
   conn.sync({force:false})          //esto devuelve una promesa, asi que tambien se puede hacer con then
   server.listen(PORT,()=>{
   console.log("Server raised in port: " + PORT);
});
} 
catch (error) {
   console.log(error.message)
};


/*
ENTONCES DECIMOS QUE LA REQUEST PRIMERO PASA POR: 
1- MORGAN : QUE SE ENCARGA QUE LAS COSAS SE MUESTREN EN LA CONSOLA, LUEGO LO LIBERA
2- ROUTER: SE ENCUENTRA CON ROUTER Y ROUTER LO DIRIGE A DONDE CORRESPONDA 
*/



//minuto 52:21