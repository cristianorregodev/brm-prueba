const { Router } = require('express')

const { getUsers, createUser } = require('../controllers/users.controller')
const { check } = require('express-validator')
const { isValidRole, existEmail } = require('../utils/dbValidators')
const { fieldsValidations } = require('../middlewares')

const router = Router()

router.get('/', getUsers)

router.post(
    '/',
    [
        check('role', 'El rol es obliglatorio').not().isEmpty(),
        check('role').custom(isValidRole),
        check('email').custom(existEmail),
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('password', 'la contraseña es obligatorio').not().isEmpty(),
        fieldsValidations,
    ],
    createUser
)

module.exports = router
