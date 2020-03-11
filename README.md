# MERN-Tutorial

## Mern stack basics - Bases de la pile Mern 

La pile MERN est une pile populaire de technologies permettant de créer une application moderne d'une seule page. Dans ce tutoriel, j'utilise la pile MERN en créant un tracker d'exercice.  

La pile MERN comprend les technologies suivantes:  

MongoDB : une base de données open source basée sur des documents.  

Express : un cadre d'application Web pour Node.js.  

React : une bibliothèque front-end JavaScript pour créer des interfaces utilisateur.  

Node.js : environnement d'exécution JavaScript qui exécute du code JavaScript en dehors d'un navigateur (tel qu'un serveur).  


### 1. MongoDB Atlas

Il est possible d'héberger une base de données MongoDB localement, 
mais il semblerait qu'il soit plus facile d'héberger la base de données à l'aide de MongoDB Atlas.

- créer un compte  

- créer un nouveau projet + nouveau cluster  

- configurer la sécurité : adresse de liste blanche IP + utilisateur de base de données  

- connecter l'application : chaîne de connection  
  

### 2. Code

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
    
      
Créer le serveur principal : le fichier server.js
créer un serveur Express, attacher cors et middleware express.json  
  
  Lancer le server grâce à `nodemon server`