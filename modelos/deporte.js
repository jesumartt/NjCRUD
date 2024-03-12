const mongoose = require("mongoose"); //importacion de la clase mongoose
//construccion del esquema en formato JSON {}
const deporteSchema = new mongoose.Schema({
   nombre: {type: String, require: true},//doc de tipo string, obligatorio
   numeroJugadores: Number, //doc de tipo numerico, sin restriccion
   pais:{type:String, required: true}
}); 
//Conversion del Schema a un modelo/clase
//Parametros del metodo "model"
// 1)Nombre del documento, en este caso "Deporte".
// 2)El scheme, nombre de la constante en la construccion del Schema.
// 3)El nombre de la coleccion/tabla, ene ste caso "Deportes".
const Deporte = mongoose.model('Deporte', deporteSchema, 'Deportes');
//Otorgar permisos de exportacion, para mapear hacia la DB
module.exports = Deporte;

