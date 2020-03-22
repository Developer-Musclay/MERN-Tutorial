# MERN-Tutorial

## Mern stack basics - Bases de la pile Mern 

La stack MERN est une pile populaire de technologies permettant de créer une application moderne *single-page application*. Dans ce tutoriel, j'utilise la pile MERN en créant un tracker d'exercice.  

La stack MERN comprend les technologies suivantes:  

**MongoDB** : une base de données open source ( *document-based* , Non relationnelle )  

**Express** : un framework d'application Web pour Node.js.  

**React** : une librairie front-end JavaScript pour créer des interfaces utilisateur.  

**Node.js** : environnement d'exécution JavaScript qui exécute du code JavaScript en dehors d'un navigateur (tel qu'un serveur).  


## I - BACK-END  

### 1. MongoDB Atlas

Il est possible d'héberger une base de données MongoDB localement, 
mais il semblerait qu'il soit plus facile d'héberger la base de données à l'aide de **MongoDB Atlas**.

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
- Créer le serveur principal : le fichier "server.js"  

- Créer un serveur Express, attacher cors et middleware express.json  
  
Lancer le serveur grâce à `nodemon server`  
    
c)  
Se connecter à notre base de données dans MongoDB Atlas.  
- Exiger Mongoose : insérer la ligne `const mongoose = require(‘mongoose’);` dans le fichier server.js, ainsi que les const relatives   
  
Pour que la connexion fonctionne, nous devons ajouter la ATLAS_URI variable d'environnement correcte.  
   
- Créer un fichier `.env`  
l'uri correspond à la chaîne de connexion de MongoDB Atlas. ( retour au tableau de bord MongoDB Atlas et copier la chaîne uri)
collez la chaîne uri dans le fichier ‘.env‘ après avoir écrit `ATLAS_URI =`  
remplacer <password> par le mot de passe configuré plus tôt.  
  
Si `«Connexion à la base de données MongoDB établie avec succès»` dans le terminal , l'opération est un succès.
  

### 3. Schéma de base de données  

Création du schéma de base de données en utilisant **Mongoose**.  

Création des fichiers *exercise.model.js* et *user.model.js* dans un nouveau dossier "models".  

#### Points de terminaison de l'API serveur ( Server API Endpoints )

Ajout des routes de point de terminaison API afin que le serveur puisse être utilisé pour effecutuer des opérations CRUD.  

Création dossier "routes". À l'intérieur, deux fichiers *exercices.js* et *users.js*.  

Pour informer le serveur que nous allons utiliser ces fichiers,  insérer dans "server.js" :  

`const exercicesRouter = require ('./ routes / exercices'); 
const usersRouter = require ('./ routes / users');`  

`app.use ('/ exercices', exercicesRouter); 
app.use ('/ users', usersRouter);`  

Les deux premières lignes chargent les routeurs à partir d'autres fichiers. Ensuite, les routeurs sont ajoutés en tant que middleware.

**Construction des fichiers de routeur**  

*Ajout de code commenté au fichier "users.js"*


### 4. Test de l'API du serveur

**Insomnia** ( outil alternatif : Postman )  

`sudo snap install insomnia`  

Insomnia nous permet de tester l'api du serveur comme par exemple :  

1) -> créer une nouvelle *POST* request en utilisant du JSON.  

exemple de requête :  

`{
 "username": "Jerem"
}`  

préciser le type de requếte *GET* ou *POST*, et bien préciser l'url /!\, ici :  

`http://localhost:5000/users/add`  


2) -> envoyer une *GET* request  

pour récupérer une liste d'utilisateurs:  

`http://localhost:5000/users`

( Body : No Body )  

**Remarque** : Pour l'ensemble des tests, le Server doit run et la connection avec la BDD doit être établie.  

Dernière vérification : Sur le tableau de bord **MongoDB Atlas** ( collections ), l'utilisateur a bien été ajouté !  

3) -> Ajouter des exercices *POST* ( toujours avec Insomnia ) sur :  

`http://localhost:5000/exercices/add`  

un exercice :  

`{  

"username": "Jerem",  

"description": "bodybuilding",  

"duration": 90,  

"date": "2020-03-13T14:19:15.000Z"  

}`  

puis un autre :  

`{  

 "username": "Jerem",  

 "description": "run",  

 "duration": 30,  

 "date": "2020-03-16T07:10:24.000Z"  
 
}` 

Vérifier en envoyant une *GET* request à `http://localhost:5000/exercices` , et/ou sur le tableau de bord MongoDB Atlas.  

- **Terminer les itinéraires** *cf: "exercices.js"* -  

-ID GET  

-ID DELETE  

-UPDATE ID POST  

Puis les tester avec Insomnia:  

a) Copier l'id d'un exercice et le coller à la fin de l'url, envoyer une requête GET.  

L'exercice est retourné. Pour le supprimer, remplacer GET par DELETE er envoyer la requête.  

b) Modifier. ( POST ) + JSON  

Copier l'id à la fin de l'url après avoir ajouté /update/  
  
    
## II - FRONT-END  

### React-App : Initialisation 

`npm start` pour executer le serveur de dev  

`npm install bootstrap` pour ajouter le framework CSS **Bootstrap**

puis ajouter dans App.js la ligne suivante:  

`import “bootstrap/dist/css/bootstrap.min.css”;`  

Importer React Router (ajouter dans App.js):  

`import { BrowserRouter as Router, Route } from “react-router-dom”;`  
et taper `npm install react-router-dom`  

Ensuite créer ses component ( React on connais ), faire les routes dans App.js
 et éventuellement supprimer fichiers et code inutiles provenant du 'react-modele', 
 modifier Title dans index.html, etc...  


 ### Create Exercise Component  

 *cf "create-exercise.component.js* + coms  

 installation du package pour DatePicker :  

 `npm install react-datepicker`  


  ### Create User Component  

  *cf "create-user.component.js*



## III - Connecter FRONT et BACK  

Nous allons utiliser la librairie **Axios** pour que notre Front-end puisse envoyer des requêtes HTTP à notre Back-end :  

`npm install axios`  

1) Nous devons terminer l'implémentation du component CreateUser et envoyer des données au backend.  

*cf "create-user.component.js*  

2) Ainsi que du component CreateExercise  

*cf "create-exercise.component.js*  

3) Et le component exercises-list  

*cf "exercises-list.component.js*  

*précision :* Le composant 'Exercise' est implémenté en tant que composant React fonctionnel (functional React component). 
L'élément clé qui rend ce type de composant différent d'un composant de classe est le manque de méthodes liées au State. 
Si tout ce que j'ai à faire est d'accepter les Props et de renvoyer du JSX, j'utilise un composant fonctionnel au lieu d'un composant de classe. *cf 'const Exercice*  

4) Enfin, implémenter le composant 'EditExercise'  

Il est très similaire au composant 'CreateExercise', les principales différences sont les méthodes 'componentDidMount et 'onSubmit'



## Vive la stack MERN !







