import Server from "./server/server";
import router from './router/router';

//INICIAMOS EL SERVER EN EL PUERTO 3000
const server = Server.init(3000);
//RUTAS
server.app.use( router );


//LANZAMOS EL SERVIDOR
server.start( ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});