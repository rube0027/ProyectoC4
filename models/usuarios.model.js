const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UsuariosSchema = new Schema({
    nombre:{type: 'string', required: true,max:60},
    pass:{type: 'string', required: true, max:10},
});


module.exports = mongoose.model("usuarios", UsuariosSchema); 