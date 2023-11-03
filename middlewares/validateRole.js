const { request, response } = require('express')

const isAdmin = (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero',
        })
    }

    const {
        Role: { role_name },
        username,
    } = req.user

    if (role_name !== process.env.ADMIN_ROLE_NAME) {
        return res.status(401).json({
            msg: `El usuario ${username} no es administrador`,
        })
    }
    next()
}
const hasRole = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero',
            })
        }
        const {
            Role: { role_name },
            username,
        } = req.user
        if (!roles.includes(role_name)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles} para el usuario ${username}.`,
            })
        }

        next()
    }
}

module.exports = { isAdmin, hasRole }
