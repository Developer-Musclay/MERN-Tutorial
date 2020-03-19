const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// "/:id GET" renvoie un élément d'exercice compte tenu d'un id
router.route ('/:id').get((req, res) => { 
  Exercise.findById(req.params.id) 
    .then(exercise => res.json(exercise)) 
    .catch(err => res.status(400) .json('Error:' + err)); 
}); 

// "/:id delete" supprime un élément d'exercice compte tenu d'un id
router.route('/:id').delete((req, res) => { 
  Exercise.findByIdAndDelete(req.params.id) 
    .then(() => res.json('Exercise deleted.')) 
    .catch(err => res.status(400).json('Error:' + err)); 
}); 

// "/update/:id POST" met à jour un élément d'exercice existant
/*  Pour ce endpoint, nous récupérons d'abord l'ancien élément d'exercice
de la base de données en fonction de l'ID. Ensuite, nous définissons les valeurs
des propriétés d'exercice sur celles disponibles dans le corps de la demande.*/
router.route('/update/:id').post((req, res) => { 
  Exercise.findById(req.params.id) 
    .then(exercise => { 
      exercise.username = req.body.username; 
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercice.date = Date.parse(req.body.date); 
        
      // "exercise.save()" enregistre dans la bdd l'objet mis à jour 
      exercise.save() 
        .then(() => res.json('Exercise updated!')) 
        .catch(err => res.status(400).json('Error:' + err)); 
    }) 
    .catch(err => res.status(400).json('Error MF!:' + err)); 
});

module.exports = router;