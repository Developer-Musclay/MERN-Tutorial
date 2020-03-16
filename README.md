# MERN-Tutorial

## Mern stack basics - Bases de la pile Mern 

La pile MERN est une pile populaire de technologies permettant de créer une application moderne d'une seule page. Dans ce tutoriel, j'utilise la pile MERN en créant un tracker d'exercice.  

La pile MERN comprend les technologies suivantes:  

**MongoDB** : une base de données open source basée sur des documents. ( Non relationnelle )  

**Express** : un cadre d'application Web pour Node.js.  

**React** : une bibliothèque front-end JavaScript pour créer des interfaces utilisateur.  

**Node.js** : environnement d'exécution JavaScript qui exécute du code JavaScript en dehors d'un navigateur (tel qu'un serveur).  


### 1. MongoDB Atlas

Il est possible d'héberger une base de données MongoDB localement, 
mais il semblerait qu'il soit plus facile d'héberger la base de données à l'aide de MongoDB Atlas.

- créer un compte  

- créer un nouveau projet + nouveau cluster  

- configurer la sécurité : adresse de liste blanche IP + utilisateur de base de données  

- connecter l'application : chaîne de connection  
  

### 2. Configuration initiale

a)  
- s'assurer que node.js est bien installé : `node -v`  

- créer un projet React avec create-react-app : `npx create-react-app mern-excercise-tracker`

- accéder au dossier ( `cd mern-excercise-tracker/` ) 

- créer un dossier pour le back ( terminal : `mkdir backend` ) et y accéder ( `cd backend` )   
puis `npm init -y`  
puis `npm install express cors mongoose dotenv`
  
Le partage de ressources d'origine croisée (CORS) permet aux demandes AJAX d'ignorer la stratégie d'origine identique et d'accéder aux ressources des hôtes distants. Le package cors fournit un middleware Express qui peut activer CORS avec différentes options. 

Mongoose rend l'interaction avec MongoDB via Node.js plus simple.  

- `npm install -g nodemon`  ( si erreur utiliser `sudo`)
  
  nodemon facilite le développement. Il s'agit d'un outil qui aide à développer des applications basées sur node.js en redémarrant automatiquement l'application de nœud lorsque des modifications de fichiers dans le répertoire sont détectées.  
    
      
b)  
- Créer le serveur principal : le fichier server.js  

- Créer un serveur Express, attacher cors et middleware express.json  
  
Lancer le serveur grâce à `nodemon server`  
    
c)  
Se connecter à notre base de données dans MongoDB Atlas.  
- Exiger Mongoose : insérer la ligne `const mongoose = require(‘mongoose’);` dans le fichier server.js, ainsi que les const relatives   
  
Pour que la connexion fonctionne, nous devons ajouter la ATLAS_URI variable d'environnement correcte.  
   
- Créer un fichier ‘.env‘  
l'uri correspond à la chaîne de connexion de MongoDB Atlas. ( retour au tableau de bord MongoDB Atlas et copier la chaîne uri)
collez la chaîne uri dans le fichier ‘.env‘ après avoir écrit ‘ATLAS_URI =‘  
remplacer <password> par le mot de passe configuré plus tôt.  
  
Si ‘«Connexion à la base de données MongoDB établie avec succès»‘ dans le terminal , l'opération est un succès.
  

### 3. Schéma de base de données  

Création du schéma de base de données en utilisant Mongoose.  

Création des fichiers *exercise.model.js* et *user.model.js* dans un nouveau dossier "models".  

#### Points de terminaison de l'API serveur ( Server API Endpoints )

Ajout des routes de point de terminaison API afin que le serveur puisse être utilisé pour effecutuer des opérations CRUD.  

Création dossier "routes". À l'intérieur, deux fichiers *exercices.js* ad *users.js*.  

Pour informer le serveur que nous allons utiliser ces fichiers,  insérer dans "server.js" : 
‘app.listen(port, function() {‘  
‘const exercicesRouter = require ('./ routes / exercices'); 
const usersRouter = require ('./ routes / users'); 

app.use ('/ exercices', exercicesRouter); 
app.use ('/ users', usersRouter);‘  

Les deux premières lignes chargent les routeurs à partir d'autres fichiers. Ensuite, les routeurs sont ajoutés en tant que middleware.

**Construction des fichiers de routeur**  

*Ajout de code commenté au fichier "users.js"*


