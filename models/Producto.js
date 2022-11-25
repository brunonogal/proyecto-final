const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productoSchema = new Schema({
    libro: {
        type: Number,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    tieneDescuento: {
        type: Boolean,
        required: false
    }

})

const Producto = mongoose.model('Producto', productoSchema)

module.exports = {Producto}