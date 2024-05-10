// En controllers/userController.js

const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  
  UserModel.findUserByEmail(email)
    .then(result => {
      if (result.length > 0) {
        const user = result[0];
        
        // Comparar la contraseña enviada con la almacenada en la base de datos
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            res.status(500).send({ message: "Error al verificar usuario", error: err.message });
          } else if (isMatch) {
            res.status(200).send({ message: "Login exitoso", user: { id: user.id, nombre: user.nombre, email: user.email } });
          } else {
            res.status(401).send({ message: "Contraseña incorrecta" });
          }
        });
      } else {
        res.status(404).send({ message: "Usuario no encontrado" });
      }
    })
    .catch(error => {
      res.status(500).send({ message: "Error al buscar usuario", error: error.message });
    });
};
