const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/connection')

class Role extends Model {}

Role.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        role_name: { type: DataTypes.STRING, unique: true },
        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'role',
        timestamps: false,
    }
)

module.exports = { Role }
