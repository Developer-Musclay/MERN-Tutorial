const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; 
mongoose.connect (uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } 
); 
const connection = mongoose.connection; 
connection.once ('open', () => { 
  console.log ("Connexion à la base de données MongoDB établie avec succès"); 
})

const exercicesRouter = require ('./routes/exercices'); 
const usersRouter = require ('./routes/users'); 

app.use ('/exercices', exercicesRouter); 
app.use ('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});