const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/connection')

class Product extends Model {}

Product.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        lot_number: { type: DataTypes.STRING, unique: true },
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.BIGINT, allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false },
        entry_date: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'product',
        timestamps: false,
    }
)

module.exports = { Product }
