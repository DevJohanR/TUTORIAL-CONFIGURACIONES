# TUTORIAL-CONFIGURACIONES PARA TRABAJAR CON NODE JS, MYSQL, SEQUELIZE

# INSTALACION DE DEPENDENCIAS
npm install express

npm install sequelize

npm install mysql2

npm install dotenv

npm install nodemon --save-dev

npm install cors


# MODULARIZACION RECOMENDADA

# Estructura del Proyecto sequelize-express-nodejs


## 📦 Estructura de Archivos

proyecto
├── 📁 node_modules              
├── 📁 src                       
│   ├── 📄 db.js                 
│   └── 📄 server.js             
├── 📄 .env                      
├── 📄 index.js                  
├── 📄 package-lock.json         
├── 📄 package.json              
└── 📄 README.md                 


# LEVANTAR EL SERVIDOR

# vamos al archivo server.js

const express = require ('express');
const server = express();
module.exports= server;

# luego vamos a index.js

const server = require ('./src/server.js');
server.listen("3001", ()=>{
    console.log("Listening on port", 3001)
})

