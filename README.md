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
