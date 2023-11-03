const { validateJWT } = require('./validateJWT')
const { fieldsValidations } = require('./fieldsValidations')
const { isAdmin } = require('./validateRole')

module.exports = { validateJWT, isAdmin, fieldsValidations }
