const {Producto} = require('../models/Producto')

const validar = async(req, res, next) => {
    const item = await Producto.findById(req.params.id)
    if(item !== null){
        next()
    } else {
        res.status(500).json({msg: 'El id es inválido'})
    }
}

module.exports = {validar}