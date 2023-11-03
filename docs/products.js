/**
 * @api {GET} /products Obtener Listado de Productos
 * @apiName ObtenerProductos
 * @apiGroup Productos
 *
 * @apiDescription Este endpoint permite obtener un listado de todos los productos registrados en la base de datos.
 *
 * @apiSuccess {Object[]} products Lista de productos.
 * @apiSuccess {Number} products.id ID único del producto.
 * @apiSuccess {String} products.name Nombre del producto.
 * @apiSuccess {Number} products.price Precio del producto.
 * @apiSuccess {Number} products.stock Cantidad en stock del producto.
 * @apiSuccess {String} products.entry_date Fecha de entrada del producto en la base de datos.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "id": 1,
 *       "name": "Producto A",
 *       "price": 19.99,
 *       "stock": 50,
 *       "entry_date": "2023-11-01"
 *     },
 *     {
 *       "id": 2,
 *       "name": "Producto B",
 *       "price": 24.99,
 *       "stock": 30,
 *       "entry_date": "2023-10-15"
 *     },
 *     {
 *       "id": 3,
 *       "name": "Producto C",
 *       "price": 14.99,
 *       "stock": 75,
 *       "entry_date": "2023-11-02"
 *     }
 *   ]
 *
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *     "error": "Ocurrió un error al recuperar la lista de productos."
 *   }
 */

/**
 * @api {POST} /products Crear un Nuevo Producto
 * @apiName CrearProducto
 * @apiGroup Productos
 *
 * @apiDescription Este endpoint permite crear un nuevo producto en la tienda en línea.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación.
 *
 * @apiParam {String} lot_number Número de lote del producto (obligatorio).
 * @apiParam {String} name Nombre del producto (obligatorio).
 * @apiParam {Number} price Precio del producto (obligatorio).
 * @apiParam {Number} stock Cantidad en stock del producto (obligatorio).
 *
 * @apiSuccess {Number} id ID único del producto creado.
 * @apiSuccess {String} message Mensaje de éxito de la creación del producto.
 *
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 201 Created
 *   {
 *     "id": 123,
 *     "message": "Producto creado con éxito."
 *   }
 *
 * @apiErrorExample {json} Ejemplo de Respuesta de Error:
 *   HTTP/1.1 400 Bad Request
 *
 *     {
 *      "errors": [
 *             {
 *              "type": "field",
 *              "msg": "El número de lote es obligatorio",
 *              "path": "lot_number",
 *              "location": "body"
 *             },
 *             {
 *              "type": "field",
 *              "msg": "El nombre del producto es obligatorio",
 *              "path": "name",
 *              "location": "body"
 *             },
 *             {
 *              "type": "field",
 *              "msg": "El precio del producto es obligatorio",
 *              "path": "price",
 *              "location": "body"
 *             },
 *             {
 *              "type": "field",
 *              "msg": "La cantidad disponible es obligatoria",
 *              "path": "stock",
 *              "location": "body"
 *             }
 *         ]
 *      }
 *
 */

/**
 * @api {PUT} /products/:id Actualizar Producto por ID
 * @apiName ActualizarProducto
 * @apiGroup Productos
 *
 * @apiDescription Este endpoint permite actualizar un producto existente en la base de datos por su ID. Se pueden enviar uno o varios de los atributos del producto en el cuerpo de la solicitud para su respectiva edición.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiParam {Number} id ID único del producto que se desea actualizar.
 * @apiParam {String} [name] Nuevo nombre del producto (Opcional).
 * @apiParam {Number} [price] Nuevo precio del producto (Opcional).
 * @apiParam {Number} [stock] Nueva cantidad en stock del producto (Opcional).
 * @apiParam {String} [entry_date] Nueva fecha de entrada del producto en la base de datos (Opcional).
 *
 * @apiSuccess {String} message Mensaje de éxito de la actualización del producto.
 *
 * @apiError {Number} status Código de estado de la respuesta.
 * @apiError {String} error Mensaje de error en caso de problemas en la solicitud.
 *
 * @apiSuccessExample {json} Ejemplo de Respuesta Exitosa:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Producto actualizado con éxito."
 *   }
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
 *     "error": "El producto con ID 123 no fue encontrado en la base de datos."
 *   }
 */

/**
 * @api {DELETE} /products/:id Eliminar Producto por ID
 * @apiName EliminarProducto
 * @apiGroup Productos
 *
 * @apiDescription Este endpoint permite eliminar un producto de la base de datos por su ID.
 *
 * @apiHeader {String} brm-token JSON Web Token (JWT) de autenticación (Requerido).
 *
 * @apiParam {Number} id ID único del producto que se desea eliminar.
 *
 * @apiSuccess (Sin contenido) {Number} status Código de estado de la respuesta.
 *
 * @apiSuccessExample {json} Respuesta Exitosa (Sin contenido):
 *   HTTP/1.1 204 No Content
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
 *     "error": "El producto con ID 123 no fue encontrado en la base de datos."
 *   }
 */
