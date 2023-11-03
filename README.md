# Prueba API REST - MBR

Realice un API Rest con entrada y salida de tipo JSON de un inventario con las siguientes
especificaciones:

## Registro (Datos básicos) y login de usuarios. Los usuarios deben tener un rol Administrador o Cliente.

Administrador:

-   CRUD de productos del inventario, cada producto debe tener las siguientesespecificaciones:
    -   Número de lote
    -   Nombre
    -   Precio
    -   Cantidad disponible
    -   Fecha de ingreso
-   Visualización de compras realizadas por los clientes, debe incluir fecha de la compra, cliente, productos comprados, cantidad por producto y el precio total de la compra,

Cliente:

-   Módulo de compras, donde se puedan agregar 1 o varios productos y la cantidad por
    cada producto.
-   Visualización de una factura donde salga la información completa de la compra.
-   Historial de productos comprados.

# Descripción funcionamiento API

La API permite a los usuarios gestionar los productos y compras de clientes, cuenta con un sistema de autenticación mediante email y password, validación de roles y Json Web Token.

La API dispone de los siguientes endpoints:

-   GET products/ --> Permite obtener listado de productos: publico
-   POST products/ --> Permite crear un producto: requiere autenticación.
-   PUT products/:id --> Permite actualizar un producto por ID: requiere autenticación.
-   DELETE products/:id --> Permite eliminar un producto por ID: requiere autenticación.
-   POST users/ --> Permite registrar un usuario en el sistema: publico
-   POST auth/login --> Permite iniciar sesión a un usuario registrado
-   GET sales/ --> Permite visualizar el listado general de ventas: requiere autenticación.
-   POST sales/ --> Permite registrar una venta en el sistemas: requiere autenticación.
-   GET sales/client/:id --> Permite visualizar las ventas de un cliente identificado por ID del cliente
-   GET sales/id --> Permite visualizar el detalle de venta de un cliente pasando el ID de la venta

## Instrucciones

A continuación detallo el paso a paso para clonar el proyecto y ponerlo a funcionar en un entorno de desarrollo local.

### Requisitos previos a la instalación

-   NodeJS: Versión 18 o superior
-   Git
-   Terminal
-   Editor de código
-   Manejador de bases de datos MySQL

### Instalación

-   Clone el respoitorio desde la terminal con el siguiente comando:
    ```bash
    git clone https://github.com/cristianorregodev/brm-prueba.git
    ```
-   Instale las dependencias del proyecto:
    ```bash
    npm install
    ```
-   Configure las variables de entorno:
    ```bash
    PORT= --> Puerto de ejecución del servidor
    DB_NAME= --> Nombre de la base de datos
    DB_USER= --> Usario de base de datos
    DB_PASSWORD= --> Contraseña de la base de datos
    DB_DIALECT= --> Tipo de base de datos ==> MySQL
    DB_HOST= --> Host de la base de datos
    SECRET_KEY= --> Frase secreta para la firma del JWT
    ADMIN_ROLE_NAME= --> Nombre del rol administrador ==> 'admin'
    ```
-   Ejecute los comando para correr las migraciones y seeders:
    -   Migraciones:
        ```bash
        npx sequelize-cli db:migrate
        ```
    -   Seeders:
        ```bash
        npx sequelize-cli db:seed:all
        ```
-   Inicie el servidor local:
    ```bash
    nodejs app.js
    ```
