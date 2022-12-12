const express = require('express');
const { obtenerProductos, cargarProducto, obtenerProductoPorId, editarProducto, eliminarProducto, consultaAxios } = require('../controllers/productoController');
const router = express.Router();
const {check} = require('express-validator')
const {validar} = require('../middlewares/validarId')


/* GET users listing. */
router.get('/lista', obtenerProductos);
router.post('/crear', [
    check('titulo').not().isEmpty().withMessage('El titulo debe cargarse'),
    check('autor').not().isEmpty().withMessage('El autor debe cargarse'),
    check('precio').isNumeric().withMessage('El precio debe ser un número').isLength({min: 1, max: 5}).withMessage('El precio ingresado debe ser de máximo 5 dígitos'),
], cargarProducto)
router.get('/id/:id([0-9a-fA-F]{24})', obtenerProductoPorId)
router.put('/editar/:id', validar,  [
    check('código').not().isEmpty().withMessage('El código debe cargarse').isNumeric().withMessage('El código debe ser numérico'),
    check('autor').not().isEmpty().withMessage('El autor debe cargarse'),
    check('precio').isNumeric().withMessage('El precio debe ser un número').isLength({min: 1, max: 5}).withMessage('El precio ingresado debe ser de máximo 5 dígitos')
], editarProducto)
router.delete('/eliminar/:id', validar, eliminarProducto)


module.exports = router;
