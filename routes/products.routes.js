const { Router } = require('express')
const { check } = require('express-validator')

const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/products.controller')

const { fieldsValidations, isAdmin, validateJWT } = require('../middlewares')
const { existProduct, existProductByLot } = require('../utils/dbValidators')

const router = Router()
//Endpoint get all products
router.get('/', getProducts)

// Endpoint for create a product
router.post(
    '/',
    [
        validateJWT,
        isAdmin,
        check('lot_number', 'El número de lote es obligatorio').not().isEmpty(),
        check('lot_number').custom(existProductByLot),
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('price', 'El precio del producto es obligatorio').not().isEmpty(),
        check('stock', 'La cantidad disponible es obligatoria').not().isEmpty(),
        fieldsValidations,
    ],
    createProduct
)

//Endpoint get product by id
router.get(
    '/:id',
    [
        validateJWT,
        isAdmin,
        check('id', 'No es un id valido').isInt(),
        check('id').custom(existProduct),
        fieldsValidations,
    ],
    getProductById
)

//Endpoint for update a product
router.put(
    '/:id',
    [
        validateJWT,
        isAdmin,
        check('id', 'No es un id valido').isInt(),
        check('id').custom(existProduct),
        fieldsValidations,
    ],
    updateProduct
)

//Endpoint for delete a product
router.delete(
    '/:id',
    [
        validateJWT,
        isAdmin,
        check('id', 'No es un id valido').isInt(),
        check('id').custom(existProduct),
        fieldsValidations,
    ],
    deleteProduct
)

module.exports = router
