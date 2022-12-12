const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    código: {
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

const Libro = mongoose.model('Libro', productoSchema)

module.exports = {Libro}