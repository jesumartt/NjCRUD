//console.log("Este server se esta ejecutando...");
const express = require("express"); //importacion del paquete express
const app = new express(); //app es una constante de tipo obj instanciada

//Enviar una solicitud a traves del metodo GET del HTTP
//Parametros:
//Recurso('')=Vacio, el recurso apunta hacia el localhost, puerto 3000
//Promesa=Una funcion flecha (=>), que costa de:(solicitud, respuesta).
//=>:Retorna un valor. En este ej. no le indicamos la SOLICITUD, por lo 
//que toma el acceso al recurso (ruta al localhost). Cuando accede a la
//ruta, mostramos un msg por consola y enviamos una solicitud 
app.get('',(req, res) => {
     console.log('Ejecutando una solicitud GET a la raiz de la App');
     res.send("Se ingresa al GET de la raiz");
});

app.get('/Admin',(req, res) => {
     console.log('App accedida desde el GET');
     res.send("Se ingresa al GET del recurso Admin");
});



app.listen(3000, ()=>{ //funcion flecha =>, reemplaza la palabra function 
     console.log("Servidor corriendo desde el puerto 3000")
});
