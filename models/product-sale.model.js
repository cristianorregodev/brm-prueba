const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/connection')
const { Product } = require('./product.model')
const { Sale } = require('./sale.model')

class Product_Sale extends Model {}

Product_Sale.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        sale_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Sale, key: Sale.id } },
        product_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Product, key: Product.id } },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.BIGINT, allowNull: false },
        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'product_sale',
        timestamps: false,
        underscored: true,
    }
)

Product.belongsToMany(Sale, { as: 'Sales', through: Product_Sale })
Sale.belongsToMany(Product, { as: 'Products', through: Product_Sale })
module.exports = { Product_Sale }
