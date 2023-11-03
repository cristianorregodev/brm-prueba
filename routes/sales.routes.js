const { Router } = require('express')

const { getSales, createSale, getSalesByClientId, getSalesById } = require('../controllers/sale.controller')

const { fieldsValidations, isAdmin, validateJWT } = require('../middlewares')
const { check } = require('express-validator')
const { hasRole } = require('../middlewares/validateRole')

const router = Router()

router.get('/', getSales)
router.post('/', [validateJWT, hasRole('admin', 'client')], createSale)
router.get('/client/:client_id', [validateJWT, isAdmin], getSalesByClientId)
router.get('/:id', [validateJWT, hasRole('admin', 'client')], getSalesById)
module.exports = router
