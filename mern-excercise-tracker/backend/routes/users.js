const router = require('express').Router();
let User = require('../models/user.model');

// requêtes HTTP GET entrantes sur le chemin /users/URL

router.route('/').get((req, res) => {
  
  /*Nous appelons Users.find()pour obtenir une liste
    de tous les utilisateurs de la base de données*/ 

  User.find()

  /* La méthode find renvoie une promesse. 
   Les résultats sont renvoyés au format JSON avec res.json(users)*/

    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// requêtes HTTP POST entrantes sur le chemin / users / add / URL

router.route('/add').post((req, res) => {

  // le nouveau nom d'utilisateur fait partie du corps de la demande

  const username = req.body.username;

  // nouvelle instance de l' utilisateur

  const newUser = new User({username});

  // le nouvel utilisateur est enregistré dans la BDD avec save()

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;