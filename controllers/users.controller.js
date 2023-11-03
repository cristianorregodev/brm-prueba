const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const { User } = require('../models/user.model')
const { sequelize } = require('../database/connection')

const getUsers = async (req = request, res = response) => {
    const t = await sequelize.transaction()
    try {
        const users = await User.findAll({
            include: { association: 'Role', attributes: ['role_name'] },
            attributes: { exclude: ['password', 'created_at', 'updated_at'] },
            transaction: t,
        })
        await t.commit()
        res.json({
            users,
        })
    } catch (error) {
        await t.rollback()
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error, ponte en contacto con el administrador del sistema.' })
    }
}

const createUser = async (req, res = response) => {
    const { username, email, password, role } = req.body

    const user = new User({ username, email, password, role_id: role })

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()

    res.json({
        username: user.username,
        email: user.email,
    })
}

module.exports = {
    getUsers,
    createUser,
}
