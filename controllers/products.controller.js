const { response, request } = require('express')
const { sequelize } = require('../database/connection')
const { Product } = require('../models/product.model')

const getProducts = async (req = request, res = response) => {
    const t = await sequelize.transaction()
    try {
        const products = await Product.findAll({
            attributes: { exclude: ['created_at', 'updated_at'] },
            transaction: t,
        })
        res.json({
            products,
        })
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const createProduct = async (req = request, res = response) => {
    const { lot_number, name, price, stock } = req.body
    try {
        const product = new Product({ lot_number, name, price, stock })

        await product.save()

        res.json({
            product,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const getProductById = async (req = request, res = response) => {
    const { id } = req.params
    const t = await sequelize.transaction()

    try {
        const product = await Product.findByPk(id, {
            include: { association: 'Sales' },
            attributes: { exclude: ['created_at', 'updated_at'] },
            transaction: t,
        })
        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' })
        }
        await t.commit()
        res.json({ product })
    } catch (error) {
        await t.rollback()
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const updateProduct = async (req = request, res = response) => {
    const { id } = req.params
    const data = req.body
    const t = await sequelize.transaction()

    try {
        await Product.update(data, { where: { id }, transaction: t })
        await t.commit()
        res.json({ id })
    } catch (error) {
        await t.rollback()
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const deleteProduct = async (req = request, res = response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    await product.destroy()

    res.sendStatus(204)
}
module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}
