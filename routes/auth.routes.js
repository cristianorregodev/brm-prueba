const { Router } = require('express')
const { check } = require('express-validator')

const { fieldsValidations } = require('../middlewares')
const { login } = require('../controllers/auth.controller')

const router = Router()

router.post(
    '/login',
    [
        check('email', 'EL correo es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatorio').not().isEmpty(),
        fieldsValidations,
    ],
    login
)

module.exports = router
