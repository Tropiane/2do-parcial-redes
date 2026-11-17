En el presente vas a encontrar la documentación del proyecto de redes que se realizó en el segundo parcial de la materia de redes.
Aqui detallaré ambas carpetas, su funcionamiento y las herramientas necesarias para su funcionamiento.

##Frontend: 
Utiliza: HTML, CSS, JS
Todos los archivos de la carpeta deben copiarse y pegarse en la carpeta de IIS, reemplazando los archivos que existen por defecto en IIS. De esta forma, podemos acceder a la página web desde el navegador.

##Backend:
Utiliza: NodeJS, Express, PostgreSQL

Para utilizar el backend, se debe contar con las siguientes herramientas instaladas:

- NodeJS: https://nodejs.org/en/download/
- Express: https://expressjs.com/es/
- PostgreSQL: https://www.postgresql.org/download/windows/

Para la base de datos, se utilizó Postgres, su configuración se encuentra en el archivo docker-compose.yml en caso de utilizar docker, de lo contrario, se ejecuta postgres de forma local.
Las consultas SQL se encuentran en el archivo database.sql.

##Levantar servidor backend. 
Para levantar el servidor backend se debe ejecutar los siguientes comandos desde PowerShell, ubicados claramente en la carpeta del backend:

1- npm install
Este sirve para instalar todas las dependencias que se encuentran en el package.json, necesarias para el funcionamiento del backend.

2- npm run dev
Este sirve para levantar el servidor backend en el puerto 3000.

####Consideraciones técnicas:
Las variables de entorno se pueden asignar según se requiera creando un archivo .env en la raiz del proyecto.
Se pueden copiar los nombres de las variables ubicadas en en .env-example a .env y modificarlas según se requiera.

Igualmente, el backend ya tiene variables para utilzar de forma local, se encuentran ubicadas en src/config/env.js