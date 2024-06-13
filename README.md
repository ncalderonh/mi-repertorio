# Mi Repertorio

### Estructura del Proyecto
```lua
mi-repertorio/
├── public/
│   └── style.css
├── config/
│   └── db.js
├── controllers/
│   └── controller.js
├── models/
│   └── queries.js
├── routes/
│   └── routes.js
├── sql/
│   └── repertorio.sql
├── views/
│   └── index.html
├── .env
├── index.js
└── package.json
```

## Descripción
La escuela de música "E-Sueño" necesita una aplicación para gestionar las canciones que sus estudiantes cantarán en sus presentaciones en vivo. Esta aplicación es un CRUD desarrollado con Node.js, Express y PostgreSQL para administrar el repertorio de canciones.

## Configuración

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_USER=tu_usuario
DB_HOST=tu_host
DB_NAME=repertorio
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

### Instalación
1. Instala las dependencias necesarias:

```bash
npm install
```

2. Configura la base de datos PostgreSQL y ejecuta las siguientes consultas SQL para crear la base de datos y la tabla:

```sql
CREATE DATABASE repertorio;

\c repertorio

CREATE TABLE canciones (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(50),
    artista VARCHAR(50),
    tono VARCHAR(10)
);
```

### Uso

Para ejecutar la aplicación, usa el siguiente comando:

```bash
node index.js
```

La aplicación disponibiliza las siguientes rutas:

- **Agregar una canción (POST /cancion)**:
  ```bash
  curl -X POST http://localhost:3000/cancion -H "Content-Type: application/json" -d '{"titulo":"Canción","artista":"Artista","tono":"Tono"}'
  ```

- **Obtener todas las canciones (GET /canciones)**:
  ```bash
  curl http://localhost:3000/canciones
  ```

- **Actualizar una canción (PUT /cancion/:id)**:
  ```bash
  curl -X PUT http://localhost:3000/cancion/1 -H "Content-Type: application/json" -d '{"titulo":"Nueva Canción","artista":"Nuevo Artista","tono":"Nuevo Tono"}'
  ```

- **Eliminar una canción (DELETE /cancion?id=1)**:
  ```bash
  curl -X DELETE http://localhost:3000/cancion?id=1
  ```

### Notas
- Asegúrate de que tu base de datos PostgreSQL esté configurada y en funcionamiento.
- Las rutas están implementadas para manejar los errores y devolver respuestas adecuadas.
```

Este archivo `README.md` proporciona una guía clara sobre cómo configurar y usar la aplicación, y cómo manejar las variables de entorno necesarias para conectar la base de datos PostgreSQL.
