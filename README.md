# RETO BACK TECNICO
Reto Tecnico

## Descripcion 
Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
Crear un endpoint GET que muestre la data almacenada.

API de prueba SWAPI: https://swapi.py4e.com/documentation

## Direccion API

````
https://zl7io6sg36.execute-api.us-east-2.amazonaws.com/dev/
````
## Integracion API SWAPI + traduccion de las keys

Los path son los mismos a los de SWAPI

### Example 1 (Direcciones)

Original
````
https://swapi.dev/api
https://swapi.dev/api/people
https://swapi.dev/api/people/1
````
Traducido
````
https://zl7io6sg36.execute-api.us-east-2.amazonaws.com/dev/api
https://zl7io6sg36.execute-api.us-east-2.amazonaws.com/dev/api/people
https://zl7io6sg36.execute-api.us-east-2.amazonaws.com/dev/api/people/1
````
### Example 2 (Resultado)

Original
````
{
  "people": "http://swapi.dev/api/people/",
  "planets": "http://swapi.dev/api/planets/",
  "films": "http://swapi.dev/api/films/",
  "species": "http://swapi.dev/api/species/",
  "vehicles": "http://swapi.dev/api/vehicles/",
  "starships": "http://swapi.dev/api/starships/"
}
````

Traducido
````
{
  "personas": "http://swapi.dev/api/people/",
  "planetas": "http://swapi.dev/api/planets/",
  "Película (s": "http://swapi.dev/api/films/",
  "especies": "http://swapi.dev/api/species/",
  "vehiculos": "http://swapi.dev/api/vehicles/",
  "naves estelares": "http://swapi.dev/api/starships/"
}
````

## Modelo con uso de Endpoint POST y GET

Para ello se creo la ruta 

````
https://zl7io6sg36.execute-api.us-east-2.amazonaws.com/dev/band
````


### Usando POST
Necesita enviar un JSON con la siguiente Infraestructura

````
{
  "BandName": "Rata Blanca",
  "BandOrigin": "Argentina",
  "BandGenere": "heavy metal"
}
````
### Usando GET
Retorna todos los valores Ingresados

````
[
  {
    "BandId": 1,
    "BandName": "Rata Blanca",
    "BandOrigin": "Argentina",
    "BandGenere": "heavy metal"
  },
  {
    "BandId": 2,
    "BandName": "Helloween",
    "BandOrigin": "Alemania",
    "BandGenere": "power metal"
  },
  {
    "BandId": 3,
    "BandName": "Rhapsody",
    "BandOrigin": "Italia",
    "BandGenere": "power metal"
  },
  {
    "BandId": 4,
    "BandName": "Stratovarious",
    "BandOrigin": "Finlandia",
    "BandGenere": "power metal"
  }
]
````

## Herramientas Usadas
- Sequelize
- Express
- Serveless
- Lambda
- RBS (Mysql)
- NodeJs
- Google Cloud Translation API

