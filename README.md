# Backend MERN para Calendar App

Este servicio fue desarrollado para la aplicación de [App Calendar](https://mern-calendar-app-react-js.herokuapp.com/)

Respositorio del Front en [Github](https://github.com/ObedSAGA/CalendarApp) (desarrollada con Create-React-App)

Si quieres usar este servicio necesitarás crear tus propias variables de entorno respetivas a la conexión con Mongo DB y tu propio SEED para validar JSON WEB TOKENS.

```text
create file .env in root

PORT=8080
DB_CNN=mongodb+srv/...
SECRET_JWT_SEED=<everything>
```

Instalar las dependencias con:
`` npm install ``

Levantar servidor en desarrollo:
``npm run dev``

### Uso del API

Ejemplos de request para autorización de usuarios.

```text
### NEW USER
POST host + /api/auth/new HTTP/1.1
content-type: application/json

{
    "name" : "name",
    "email" : "name@example.com",
    "password" : "pass"
}


### LOGIN
POST host + /api/auth HTTP/1.1
content-type: application/json

{
    "email": "name@example.com",
    "password": "pass"
}

### RENEW TOKEN
GET  host + /api/auth/renew
x-token: JSON WEB TOKEN
```

Ejemplos de CRUD de eventoso

```text
### LEER EVENTOS
GET host + /api/events
x-token: JWT


### CREAR EVENTOS
POST host + /api/events HTTP/1.1
x-token: JWT
content-type: application/json

{
    "title": "Cita con doctor",
    "start": Fecha de inicio, (Tiene que ser un objeto Date de js)
    "end": Fecha de final,
    "notes": "Llevar análisis" (opcional)
}

### ACTUALIZAR EVENTOS
PUT host +/api/events/62141b07571b265d27e7645b
x-token: JWT
content-type: application/json

{
    "title": "title",
    "start": Fecha de inicio,
    "end": Fecha de final,
    "notes": "notes"
}

### ELIMINAR EVENTOS
DELETE  host +/api/events/:id
x-token: JWT

```

Un saludo.

Let`s keep coding

```text
░█████╗░██████╗░███████╗██████╗░░██████╗░█████╗░░██████╗░░█████╗░
██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝░██╔══██╗
██║░░██║██████╦╝█████╗░░██║░░██║╚█████╗░███████║██║░░██╗░███████║
██║░░██║██╔══██╗██╔══╝░░██║░░██║░╚═══██╗██╔══██║██║░░╚██╗██╔══██║
╚█████╔╝██████╦╝███████╗██████╔╝██████╔╝██║░░██║╚██████╔╝██║░░██║
░╚════╝░╚═════╝░╚══════╝╚═════╝░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝
