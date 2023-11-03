const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/connection')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.paths = { users: '/api/users', auth: '/api/auth', products: '/api/products', sales: '/api/sales' }

        this.connectDB()

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }

    async connectDB() {
        await dbConnection()
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json())

        // Directorio Público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.paths.users, require('../routes/users.routes'))
        this.app.use(this.paths.auth, require('../routes/auth.routes'))
        this.app.use(this.paths.products, require('../routes/products.routes'))
        this.app.use(this.paths.sales, require('../routes/sales.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}

module.exports = Server
