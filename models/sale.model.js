const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/connection')
const { User } = require('./user.model')

class Sale extends Model {}

Sale.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'sale',
        timestamps: false,
    }
)

Sale.belongsTo(User, { as: 'User', foreignKey: 'user_id' })
User.hasMany(Sale, { as: 'Sales', foreignKey: 'user_id', onDelete: 'CASCADE' })
module.exports = { Sale }
