const { Product } = require('../models/product.model')
const { Role } = require('../models/role.model')
const { User } = require('../models/user.model')

//Validate role
const isValidRole = async (role = '') => {
    const existRole = await Role.findByPk(role)
    if (!existRole) {
        throw new Error('El role no existe')
    }
}

//Validate if an email already exist
const existEmail = async (email = '') => {
    const isEmail = await User.findOne({ where: { email } })
    if (isEmail) throw new Error(`El correo: ${email} ya se encuentra registrado`)
}

//Validate if a product already exist
const existProduct = async (id) => {
    const isProduct = await Product.findByPk(id)
    if (!isProduct) throw new Error(`No existe un producto con el id: ${id}`)
}

//Validate if an email already exist
const existProductByLot = async (lot_number = '') => {
    const isProduct = await Product.findOne({ where: { lot_number } })
    if (isProduct) throw new Error(`Ya existe un producto con el número de lote: ${lot_number}`)
}

module.exports = { isValidRole, existEmail, existProduct, existProductByLot }
