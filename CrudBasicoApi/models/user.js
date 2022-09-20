
const { Schema, model } = require('mongoose');


const UsersSchema = Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String
    },
    telefono: {
        type: String,
    },
    ciudad: {
        type: String,
    }
});


module.exports = model('Users', UsersSchema)
