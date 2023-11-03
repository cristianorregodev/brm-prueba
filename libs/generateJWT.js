const jwt = require('jsonwebtoken')
/**
 * @function generateJWT
 * @description The function `generateJWT` generates a JSON Web Token (JWT) with a given ID and a secret key.
 * @param id - The `id` parameter is the unique identifier of the user for whom the JWT (JSON Web
 * Token) is being generated.
 * @returns {Promise} returns a Promise that resolves to a JSON Web Token (JWT) if it
 * is successfully generated.
 */
const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id }

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' }, (err, token) => {
            if (err) {
                console.log(err)
                reject('No se pudo generar el token')
            } else {
                resolve(token)
            }
        })
    })
}

module.exports = { generateJWT }
