const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductosSchema = new Schema({
    nombre:{type: 'string', required: true,max:60},
    id:{type: 'string', required: true, max:10},
    descripcion:{type: 'string', required: true, max:400},
    precio:{type: 'string', required: true, max:11}
});


module.exports = mongoose.model("productos", ProductosSchema); 






