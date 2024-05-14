//src/models/userModels.js
const db = require('../config/db');



//REGISTER
exports.createUser = (userData) =>{
return db.query('INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?)', [
    userData.nombre,
    userData.email,
    userData.password
]);
};


//LOGIN 
exports.findUserByEmail = (email)=>{
    return db.query('SELECT * FROM usuarios WHERE email = ?', [email])
};

