# MERN-Tutorial

## Mern stack basics - Bases de la pile Mern 

La pile MERN est une pile populaire de technologies permettant de créer une application moderne d'une seule page. Dans ce tutoriel, j'utilise la pile MERN en créant un tracker d'exercice.  

La pile MERN comprend les technologies suivantes:  

MongoDB : une base de données open source basée sur des documents.
Express : un cadre d'application Web pour Node.js.
React : une bibliothèque front-end JavaScript pour créer des interfaces utilisateur.
Node.js : environnement d'exécution JavaScript qui exécute du code JavaScript en dehors d'un navigateur (tel qu'un serveur).  


1. MongoDB Atlas

Il est possible d'héberger une base de données MongoDB localement, 
mais il semblerait qu'il est plus facile d'héberger la base de données à l'aide de MongoDB Atlas.

- créer un compte  

- créer un nouveau projet + nouveau cluster  

- configurer la sécurité : adresse de liste blanche IP + utilisateur de base de données  

- connecter l'application : chaîne de connection  


2. Code

- s'assurer que node.js est bien installé : `node -v`  

- créer un projet React avec create-react-app : `npx create-react-app mern-excercise-tracker`

- accéder au dossier : `cd mern-excercise-tracker/`