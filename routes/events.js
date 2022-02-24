/* 
            Events Router
            /api/events

*/

const {Router} = require('express');
const {check} = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const {validarJWT} = require('../middlewares/validar-jwt');
const isDate = require('../helpers/isDate');

const router = Router();


// Todas tienen que pasar por la validacion de JWT 
router.use(validarJWT);

// Optener eventos
router.get('/',  getEventos);

// Crear un evento
router.post(
    '/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        //check tiene la opción de validar Date con un isDate pero haremos validación Custom
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('start', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;