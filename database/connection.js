require('dotenv').config()
const Sequelize = require('sequelize')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
})

const dbConnection = async () => {
    try {
        await sequelize.sync()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

module.exports = { sequelize, dbConnection }
