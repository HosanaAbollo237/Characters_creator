## Créateur de personnage 

Cette application a pour but de mettre en avant les bases de REACTJS ainsi que l'utilisation de firebase en base de données et axios afin de faire des requetes HTTP depuis le navigateur

# Installation du projet 

-   Dans un premier temps cloner le projet
    `git clone https://github.com/HosanaAbollo237/characters_creator.git`

-   Puis aller dans le répertoire du projet : 
    ` cd characters_creator`

-   Lancer le projet 
    ` npm start`

-   Le navigateur lancera directement le navigateur a l'adresse:  [localhost:3000](http://localhost:3000)

#   Etapes de la création du projet

-   Création des composants/containers Bouton, TitreH1, createurPersonnages, Personnage Armes dans leur dossiers respectifs ( différencier un container d'un component)

-   Au niveau de createurPersonnages on envoit les données du state vers le composant personnage ( spread operateur) **<Character {...this.state.character} />**
    -   A ce niveau les données en question sont maintenant des propriétés du        composant Personnage, ex de récupération de data: **<div>{props.image}</div>**

-   


-   