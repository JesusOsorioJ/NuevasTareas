# Manual de uso de backend 🙌
## Creacion de usuario
1. Usar algo cliente para hacer solicitud HTTP como POSTMAN 
2. Enviar solicitud POST a http://localhost:8080/api/user con body 
{
    "email":"ejemplo@gmail.com",
    "password":"contraseñaejemplo"
}
3. Podra obtener todos los usuarios GET a http://localhost:8080/api/user

Nota: La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula
## Autenticacion de usuario
1. Enviar solitud GET a http://localhost:8080/auth/local/login con body de usuario creado en paso Creacion de usuario
2. Copiar Bearer Token agregar a Authorization header

## Creacion, modificacion o eliminacion
1. Con la autorizacion (Bearer Token) podra crear, eliminar o modificar lista
2. Para crear lista enviar POST a http://localhost:8080/api/favs con body de la forma 
{
    "name":"ListaDeFavoritos1",
    "favorites": [
        { "title":"favorite1","description":"description1","link":"link1"},
        { "title":"favorite2","description":"description2","link":"link2"},
    ] 
}       
3. Para eliminar o modificar enviar DELETE o PATCH con id de lista ejemplo
http://localhost:8080/api/favs/62803551f2b67058d94fe4af con body si es necesario

## Consultar 🔎
1. Podra consultar todas las lista, lista por id o listas por usuario
2. Para todas las lista enviar GET a http://localhost:8080/api/favs
3. Para lista por id enviar GET con id: ejemplo http://localhost:8080/api/favs/62803551f2b67058d94fe4af
4. Para listas por usuario enviar GET con email: ejemplo http://localhost:8080/api/favs/email/hola@gmail.com

