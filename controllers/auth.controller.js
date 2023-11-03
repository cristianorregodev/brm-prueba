const { response } = require('express')
const bcryptjs = require('bcryptjs')
const { User } = require('../models/user.model')
const { generateJWT } = require('../libs/generateJWT')

const login = async (req, res = response) => {
    const { email, password } = req.body

    try {
        //Verificar si el ususario esta registrado
        const user = await User.findOne({
            include: 'Role',
            where: { email },
        })
        if (!user) {
            return res.status(400).json({ message: 'El Usuario ingresado no es valido.' })
        }

        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: 'La Contraseña ingresada no es valida.' })
        }

        //Generar JWT
        const token = await generateJWT(user.id)

        const {
            username,
            Role: { role_name },
        } = user
        res.json({
            user: { username, role_name, token },
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal al intentar iniciar sesión. Pongase en contacto con el administrador.',
        })
    }
}

module.exports = {
    login,
}
