//console.log("Este server se esta ejecutando...");
const express = require("express"); //importacion del paquete express
const app = new express(); //app es una constante de tipo obj instanciada

const mongoose = require("mongoose"); //importa el modulo mongoose
//Conexion hacia la DB (MongoDB Atlas)
//connect() Cadena de conexion en Atlas(op: Drivers/Connect your application)
//Replace <password> with NJ-CRUD
// Entre el / y el simbolo ? colocamos el nombre de la BD (db_crud)
mongoose.connect(
 "mongodb+srv://Nj-CRUD:Nj-CRUD@clusternjcrud.rooaifj.mongodb.net/db_crud?retryWrites=true&w=majority&appName=ClusterNjCRUD");

app.listen(3000, ()=>{ //funcion flecha =>, reemplaza la palabra function 
     console.log("Servidor corriendo desde el puerto 3000")
});
