const {Libro} = require('../models/Libro')
const axios = require('axios')

const obtenerProductos = async(req, res) => {
    const productos = await Producto.find()
    res.json({productos})
}

const cargarProducto = async(req, res) => {
    try{
        const producto = new Producto(req.body)
    await producto.save()
    res.status(201).json({msg: 'El producto ha sido guardado exitosamente.', producto: producto})
    }
    catch(error){
        console.log(error.message)
    }
}

const consultaAxios = async(req, res) => {
    try{
        const respuesta = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart')
        res.json(respuesta.data)
    }
    catch(error){
        console.log(error)
    }
}

const obtenerProductoPorId = async(req, res) => {
    const producto = await Producto.findById(req.params.id)
    res.status(200).json({producto})
}

const editarProducto = async(req, res) => {
    try{
        const error = validationResult(req)
        if(error.isEmpty()){
            await Producto.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg: 'Producto actualizado'})
        }else{
        res.status(501).json({msg: error})
        }
    }
    catch(error){
        console.log(error.message)
    }
}

const eliminarProducto = async(req, res) => {
    try{
        const producto = await Producto.findByIdAndDelete(req.params.id)
        res.json({msg: 'Producto eliminado.', producto})
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = {obtenerProductos, cargarProducto, obtenerProductoPorId, editarProducto, eliminarProducto, consultaAxios}