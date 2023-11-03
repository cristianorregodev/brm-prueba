/**
 * @api {POST} /auth/login Iniciar Sesión
 * @apiName IniciarSesion
 * @apiGroup Autenticación
 *
 * @apiDescription Este endpoint permite a un usuario iniciar sesión en el sistema mediante la autenticación. No se requiere un JSON Web Token (JWT) en el encabezado para esta solicitud.
 *
 * @apiParam {String} email Correo electrónico del usuario (obligatorio).
 * @apiParam {String} password Contraseña del usuario (obligatoria).
 *
 * @apiSuccess {String} username Nombre de usuario autenticado.
 * @apiSuccess {String} role_name Rol del usuario, que puede ser "admin" o "client".
 * @apiSuccess {String} token JSON Web Token (JWT) para la autenticación.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   {
 *     "username": "usuario123",
 *     "role_name": "client",
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ..."
 *   }
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (Solicitud Incorrecta):
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "error": "El correo electrónico y la contraseña son obligatorios."
 *   }
 */
