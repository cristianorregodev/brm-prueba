const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/connection')
const { Role } = require('./role.model')

class User extends Model {}

User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: DataTypes.STRING,
        role_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Role, key: Role.id } },

        created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
    },
    {
        sequelize,
        modelName: 'user',
        timestamps: false,
    }
)

User.belongsTo(Role, { as: 'Role', foreignKey: 'role_id' })
Role.hasMany(User, { as: 'Users', foreignKey: 'role_id', onDelete: 'CASCADE' })
module.exports = { User }
