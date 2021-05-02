import React from 'react'
import ImagePlayer1 from '../../../assets/images/persos/player1.png'
import ImagePlayer2 from '../../../assets/images/persos/player2.png'
import ImagePlayer3 from '../../../assets/images/persos/player3.png'
import classes from '../styleCharacter.module.css'

const CharacterPicture = (props) => {

    // En fonction de la valeur du numPicture nous allons afficher l'image du personnage en conséquent
    let imageToPrint = "";
    if(props.numPicture === 1){
        imageToPrint = ImagePlayer1
    }
    else if(props.numPicture === 2){
        imageToPrint = ImagePlayer2
    }else if(props.numPicture === 3){
        imageToPrint = ImagePlayer3
    }

    
    return(
        <div className={classes.divParent}>
            {/* Fonction leftArrow() + rightArrow déclenché au clic permettant de faire défiler les images des personnages
                -   Ces propriétés ont été envoyées par le composant parent Personnage (Character) qui lui meme est controlé par le composant CharacterCreator
            */}
            <div onClick={() => props.leftArrow()} id={classes.triangle} className={classes.triangle_1}> </div>
            <img src={imageToPrint} alt="charac"/>
            <div onClick={() => props.rightArrow()}  id={classes.triangle} className={classes.triangle_2}></div>
        </div>
    )
}

export default CharacterPicture;
