# API Gestión de Gastos

La API de Gestión de Gastos es una herramienta diseñada para ayudarte a organizar y registrar tus gastos personales o grupales de manera efectiva. Esta API permite a los usuarios crear categorías personalizadas, registrar gastos asociados a esas categorías y gestionar grupos de gastos compartidos entre múltiples usuarios.

## Autenticación

# Registro

URL: /auth/register
Método: POST
Autenticación: No requerida
Parámetros:
email (string, requerido)
password (string, requerido)
nombre (string, requerido)
Respuesta:
201 Created si el usuario es creado exitosamente
500 Internal Server Error si hay un error en el servidor

# Inicio de sesión

URL: /auth/login
Método: POST
Autenticación: No requerida
Parámetros:
email (string, requerido)
password (string, requerido)
Respuesta:
200 OK si el inicio de sesión es exitoso
401 Unauthorized si las credenciales son incorrectas

## Usuarios

# Obtener usuario por ID

URL: /usuarios/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con los datos del usuario
404 Not Found si el usuario no existe

# Actualizar usuario

URL: /usuarios/:id
Método: PUT
Autenticación: Requerida
Parámetros:
id (string, requerido)
email (string, opcional)
password (string, opcional)
nombre (string, opcional)
Respuesta:
200 OK si el usuario es actualizado exitosamente
404 Not Found si el usuario no existe
500 Internal Server Error si hay un error en el servidor

## Categorías

# Obtener todas las categorías

URL: /categorias/
Método: GET
Autenticación: Requerida
Respuesta:
200 OK con una lista de todas las categorías
500 Internal Server Error si hay un error en el servidor

# Obtener categoría por ID

URL: /categorias/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con los datos de la categoría
404 Not Found si la categoría no existe

## Categorías Personalizadas

# Obtener categorías personalizadas por ID de usuario

URL: /categorias-personalizadas/usuario/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de todas las categorías personalizadas del usuario
404 Not Found si el usuario no tiene categorías personalizadas

# Crear categoría personalizada

URL: /categorias-personalizadas/usuario/:id
Método: POST
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, requerido)
descripcion (string, opcional)
Respuesta:
201 Created si la categoría personalizada es creada exitosamente
500 Internal Server Error si hay un error en el servidor

# Obtener categoría personalizada por ID

URL: /categorias-personalizadas/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con los datos de la categoría personalizada
404 Not Found si la categoría personalizada no existe

# Eliminar categoría personalizada

URL: /categorias-personalizadas/:id
Método: DELETE
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK si la categoría personalizada es eliminada exitosamente
404 Not Found si la categoría personalizada no existe

# Actualizar categoría personalizada

URL: /categorias-personalizadas/:id
Método: PUT
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, opcional)
descripcion (string, opcional)
Respuesta:
200 OK si la categoría personalizada es actualizada exitosamente
404 Not Found si la categoría personalizada no existe
500 Internal Server Error si hay un error en el servidor

## Gastos

# Obtener gastos por ID de usuario

URL: /gastos/usuarios/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de todos los gastos del usuario
404 Not Found si el usuario no tiene gastos

# Agregar gasto

URL: /gastos/
Método: POST
Autenticación: Requerida
Parámetros:
usuarioId (string, requerido)
monto (number, requerido)
descripcion (string, opcional)
categoriaId (string, opcional)
Respuesta:
201 Created si el gasto es agregado exitosamente
500 Internal Server Error si hay un error en el servidor

# Eliminar gasto

URL: /gastos/:id
Método: DELETE
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK si el gasto es eliminado exitosamente
404 Not Found si el gasto no existe

# Actualizar gasto

URL: /gastos/:id
Método: PUT
Autenticación: Requerida
Parámetros:
id (string, requerido)
monto (number, opcional)
descripcion (string, opcional)
categoriaId (string, opcional)
Respuesta:
200 OK si el gasto es actualizado exitosamente
404 Not Found si el gasto no existe
500 Internal Server Error si hay un error en el servidor

## Grupos de Gastos

# Obtener grupos de gastos por ID de usuario

URL: /gruposgastos/usuarios/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de todos los grupos de gastos del usuario
404 Not Found si el usuario no tiene grupos de gastos

# Agregar grupo de gasto

URL: /gruposgastos/usuarios/:id
Método: POST
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, requerido)
descripcion (string, opcional)
Respuesta:
201 Created si el grupo de gasto es agregado exitosamente
500 Internal Server Error si hay un error en el servidor

# Actualizar grupo de gasto

URL: /gruposgastos/:id
Método: PUT
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, opcional)
descripcion (string, opcional)
Respuesta:
200 OK si el grupo de gasto es actualizado exitosamente
404 Not Found si el grupo de gasto no existe
500 Internal Server Error si hay un error en el servidor

# Eliminar grupo de gasto

URL: /gruposgastos/usuarios/:userId/:id
Método: DELETE
Autenticación: Requerida
Parámetros:
userId (string, requerido)
id (string, requerido)
Respuesta:
200 OK si el grupo de gasto es eliminado exitosamente
404 Not Found si el grupo de gasto no existe

# Compartir grupo de gasto por email

URL: /gruposgastos/share
Método: POST
Autenticación: Requerida
Parámetros:
email (string, requerido)
grupoGastoId (string, requerido)
Respuesta:
200 OK si el grupo de gasto es compartido exitosamente
500 Internal Server Error si hay un error en el servidor

## Subcategorías

# Obtener todas las subcategorías

URL: /subcategorias/
Método: GET
Autenticación: Requerida
Respuesta:
200 OK con una lista de todas las subcategorías
500 Internal Server Error si hay un error en el servidor

# Obtener subcategoría por ID

URL: /subcategorias/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con los datos de la subcategoría
404 Not Found si la subcategoría no existe

# Obtener subcategorías por ID de categoría

URL: /subcategorias/categorias/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de subcategorías pertenecientes a la categoría
404 Not Found si la categoría no tiene subcategorías

## Subcategorías Personalizadas

# Obtener subcategorías personalizadas por ID de usuario

URL: /subcategorias-personalizadas/usuario/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de todas las subcategorías personalizadas del usuario
404 Not Found si el usuario no tiene subcategorías personalizadas

# Crear subcategoría personalizada

URL: /subcategorias-personalizadas/usuario/:id
Método: POST
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, requerido)
categoriaPersonalizadaId (string, requerido)
Respuesta:
201 Created si la subcategoría personalizada es creada exitosamente
500 Internal Server Error si hay un error en el servidor

# Obtener subcategoría personalizada por ID

URL: /subcategorias-personalizadas/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con los datos de la subcategoría personalizada
404 Not Found si la subcategoría personalizada no existe

# Eliminar subcategoría personalizada

URL: /subcategorias-personalizadas/:id
Método: DELETE
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK si la subcategoría personalizada es eliminada exitosamente
404 Not Found si la subcategoría personalizada no existe

# Actualizar subcategoría personalizada

URL: /subcategorias-personalizadas/:id
Método: PUT
Autenticación: Requerida
Parámetros:
id (string, requerido)
nombre (string, opcional)
categoriaPersonalizadaId (string, opcional)
Respuesta:
200 OK si la subcategoría personalizada es actualizada exitosamente
404 Not Found si la subcategoría personalizada no existe
500 Internal Server Error si hay un error en el servidor

# Obtener subcategorías por ID de categoría personalizada

URL: /subcategorias-personalizadas/categorias-personalizadas/:id
Método: GET
Autenticación: Requerida
Parámetros:
id (string, requerido)
Respuesta:
200 OK con una lista de subcategorías pertenecientes a la categoría personalizada
404 Not Found si la categoría personalizada no tiene subcategorías
