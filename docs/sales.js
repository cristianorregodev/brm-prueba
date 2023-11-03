/**
 * @api {GET} /sales Obtener Listado de Ventas
 * @apiName ObtenerVentas
 * @apiGroup Ventas
 *
 * @apiDescription Este endpoint permite obtener un listado de todas las ventas generadas en el sistema.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiSuccess {Object[]} sales Lista de ventas.
 * @apiSuccess {Number} sales.id ID único de la venta.
 * @apiSuccess {Number} sales.customer_id ID del cliente asociado a la venta.
 * @apiSuccess {String} sales.created_at Fecha de creación de la venta.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "id": 1,
 *       "client_id": 123,
 *       "created_at": "2023-11-03T10:00:00"
 *     },
 *     {
 *       "id": 2,
 *       "client_id": 456,
 *       "created_at": "2023-11-02T14:30:00"
 *     },
 *     {
 *       "id": 3,
 *       "client_id": 789,
 *       "created_at": "2023-11-01T09:15:00"
 *     }
 *   ]
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (No Autorizado):
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "error": "Acceso no autorizado. Se requiere un token válido en el encabezado brm-token."
 *   }
 */

/**
 * @api {POST} /sales Crear Venta con Productos
 * @apiName CrearVenta
 * @apiGroup Ventas
 *
 * @apiDescription Este endpoint permite crear una venta en la base de datos con uno o varios productos. Se requiere un encabezado con un JSON Web Token (JWT) válido para la autenticación.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiParam {Object[]} products Lista de productos que se incluirán en la venta.
 * @apiParam {Number} products.id ID único del producto (obligatorio).
 * @apiParam {Number} products.quantity Cantidad del producto vendido (obligatorio).
 * @apiParam {Number} products.price Precio del producto en la venta (obligatorio).
 *
 * @apiSuccess {Number} sale_id ID único de la venta creada.
 * @apiSuccess {Number} client_id ID del cliente asociado a la venta.
 * @apiSuccess {String} date Fecha de creación de la venta.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 201 Created
 *   {
 *     "sale_id": 1,
 *     "client_id": 123,
 *     "date": "2023-11-03T14:30:00"
 *   }
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (No Autorizado):
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "error": "Acceso no autorizado. Se requiere un token válido en el encabezado brm-token."
 *   }
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (Bad Request):
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "error": "La solicitud es incorrecta. Verifique los datos de los productos."
 *   }
 */

/**
 * @api {GET} /sales/client/:client_id Obtener Compras de un Cliente
 * @apiName ObtenerComprasCliente
 * @apiGroup Ventas
 *
 * @apiDescription Este endpoint permite obtener un listado de compras realizadas por un cliente específico. Se requiere un encabezado con un JSON Web Token (JWT) válido para la autenticación.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiParam {Number} client_id ID único del cliente cuyas compras se desean consultar.
 *
 * @apiSuccess {Object[]} sales Lista de compras realizadas por el cliente.
 * @apiSuccess {Number} sales.id ID único de la compra.
 * @apiSuccess {String} sales.created_at Fecha de creación de la compra.
 * @apiSuccess {Object} sales.User Información del cliente que realizó la compra.
 * @apiSuccess {String} sales.User.username Nombre de usuario del cliente.
 * @apiSuccess {Object[]} sales.Products Lista de productos comprados en esta compra.
 * @apiSuccess {Number} sales.Products.id ID único del producto.
 * @apiSuccess {String} sales.Products.name Nombre del producto.
 * @apiSuccess {Number} sales.Products.price Precio del producto en la compra.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "id": 1,
 *       "created_at": "2023-11-03T14:30:00",
 *       "User": {
 *         "username": "cliente123"
 *       },
 *       "Products": [
 *         {
 *           "id": 101,
 *           "name": "Producto A",
 *           "price": 19.99
 *         },
 *         {
 *           "id": 102,
 *           "name": "Producto B",
 *           "price": 24.99
 *         }
 *       ]
 *     },
 *     {
 *       "id": 2,
 *       "created_at": "2023-11-02T15:45:00",
 *       "User": {
 *         "username": "cliente123"
 *       },
 *       "Products": [
 *         {
 *           "id": 102,
 *           "name": "Producto B",
 *           "price": 24.99
 *         },
 *         {
 *           "id": 103,
 *           "name": "Producto C",
 *           "price": 14.99
 *         }
 *       ]
 *     }
 *   ]
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (No Autorizado):
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "error": "Acceso no autorizado. Se requiere un token válido en el encabezado brm-token."
 *   }
 */

/**
 * @api {GET} /sales/:id Obtener Detalle de Compra
 * @apiName ObtenerDetalleCompra
 * @apiGroup Ventas
 *
 * @apiDescription Este endpoint permite obtener el detalle de una compra de un cliente específico por su ID. Se requiere un encabezado con un JSON Web Token (JWT) válido para la autenticación.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiParam {Number} id ID único de la compra de la que se desea obtener el detalle.
 *
 * @apiSuccess {Number} id ID único de la compra.
 * @apiSuccess {String} username Nombre de usuario del cliente que realizó la compra.
 * @apiSuccess {Object[]} products Lista de productos comprados en esta compra.
 * @apiSuccess {String} products.name Nombre del producto.
 * @apiSuccess {Number} products.price Precio del producto en la compra.
 * @apiSuccess {Number} total Total de la compra.
 * @apiSuccess {String} date Fecha de la compra.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   {
 *     "id": 1,
 *     "username": "cliente123",
 *     "products": [
 *       {
 *         "name": "Producto A",
 *         "price": 19.99
 *       },
 *       {
 *         "name": "Producto B",
 *         "price": 24.99
 *       }
 *     ],
 *     "total": 44.98,
 *     "date": "2023-11-03T14:30:00"
 *   }
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (No Autorizado):
 *   HTTP/1.1 401 Unauthorized
 *   {
 *     "error": "Acceso no autorizado. Se requiere un token válido en el encabezado brm-token."
 *   }
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error (No Encontrado):
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "La compra con ID 1 no fue encontrada en la base de datos."
 *   }
 */
