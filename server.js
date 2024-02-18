//console.log("Este server se esta ejecutando...");
const express = require("express"); //importacion del paquete express
const app = new express(); //app es una constante de tipo obj instanciada
app.listen(3000, ()=>{ //funcion flecha =>, reemplaza la palabra function 
     console.log("Servidor corriendo desde el puerto 3000")
});
