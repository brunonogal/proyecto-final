const express = require('express');
const { obtenerProductos, cargarProducto, obtenerProductoPorId, editarProducto, eliminarProducto, consultaAxios } = require('../controllers/productoController');
const router = express.Router();
const {check} = require('express-validator')
const {validar} = require('../middlewares/validarId')


/* GET users listing. */
router.get('/lista', obtenerProductos);
router.get('/bromas', consultaAxios)
router.post('/crear', [
    check('libro').not().isEmpty().withMessage('El libro debe cargarse'),
    check('autor').not().isEmpty().withMessage('El autor debe cargarse'),
    check('precio').isNumeric().withMessage('El precio debe ser un número').isLength({min: 1, max: 5}).withMessage('El precio ingresado debe ser de máximo 5 dígitos'),
], cargarProducto)
router.get('/id/:id([0-9a-fA-F]{24})', obtenerProductoPorId)
router.put('/editar/:id', validar,  [
    check('precio').not().isEmpty().withMessage('El precio debe cargarse').isNumeric().withMessage('El código debe ser numérico'),
    check('autor').not().isEmpty().withMessage('El autor debe cargarse'),
    check('precio').isNumeric().withMessage('El precio debe ser un número').isLength({min: 1, max: 5}).withMessage('El precio ingresado debe ser de máximo 5 dígitos')
], editarProducto)
router.delete('/eliminar/:id', validar, eliminarProducto)


module.exports = router;
