const db = require('../config/db');



//REGISTER
exports.createUser = (userData) =>{
return db.query('INSERT INTO usuarios (nombre, email) VALUES (?,?)', [
    userData.nombre,
    userData.email
]);
};


//LOGIN 
exports.findUserByEmail = (email)=>{
    return db.query('SELECT * FROM usuarios WHERE email = ?', [email])
};

