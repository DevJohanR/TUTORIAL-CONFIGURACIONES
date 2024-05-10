require("dotenv").config();

const {USER, PASSWORD, HOST, PORT, BDD} = process.env;

console.log ({USER, PASSWORD, HOST, PORT, BDD})

const {Sequelize} = require("sequelize");

