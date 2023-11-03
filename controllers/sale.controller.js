const { response, request } = require('express')
const { Sale } = require('../models/sale.model')
const { Product_Sale } = require('../models/product-sale.model')
const { sequelize } = require('../database/connection')

const getSales = async (req = request, res = response) => {
    const t = await sequelize.transaction()
    try {
        const sales = await Sale.findAll({
            transaction: t,
        })
        await t.commit()
        res.json({
            sales,
        })
    } catch (error) {
        await t.rollback()
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const createSale = async (req = request, res = response) => {
    const {
        user: { id },
    } = req
    const { products } = req.body

    const t = await sequelize.transaction()
    try {
        const sale = await Sale.create({ user_id: id }, { transaction: t })
        products.forEach(async (product) => {
            const { price, quantity, ...rest } = product
            const subTotal = price * quantity
            await Product_Sale.create({
                ...rest,
                price: subTotal,
                quantity,
                sale_id: sale.id,
            })
        })
        await t.commit()
        res.json({
            sale_id: sale.id,
            client_id: sale.user_id,
            date: sale.created_at,
        })
    } catch (error) {
        await t.rollback()
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const getSalesById = async (req = request, res = response) => {
    const { id } = req.params
    const user_id = req.user.id
    try {
        const sales = await Sale.findAll({
            include: [
                { association: 'User', attributes: ['username'] },
                {
                    association: 'Products',
                    attributes: ['name', 'price'],
                    through: { attributes: ['quantity', 'price'] },
                },
            ],
            attributes: ['id', 'created_at'],
            where: { user_id },
        })

        if (sales.length < 1) return res.status(404).json({ msg: 'No se encontraron ventas.' })

        const sale = sales.find((sale) => sale.id === Number(id))

        if (!sale) return res.status(404).json({ msg: 'No se encontró venta con el ID:' + id })

        const total = sale.Products.reduce((acc, product) => acc + product.product_sale.price, 0)

        return res.json({
            id: sale.id,
            client: sale.User.username,
            products: sale.Products,
            total,
            date: sale.created_at,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}
const getSalesByClientId = async (req = request, res = response) => {
    const { client_id } = req.params

    try {
        const sales = await Sale.findAll({
            include: [
                { association: 'User', attributes: ['username'] },
                {
                    association: 'Products',
                    attributes: ['name', 'price'],
                    through: { attributes: ['quantity', 'price'] },
                },
            ],
            attributes: ['id', 'created_at'],
            where: { user_id: client_id },
        })
        res.json({ sales })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

module.exports = {
    getSales,
    createSale,
    getSalesById,
    getSalesByClientId,
}
