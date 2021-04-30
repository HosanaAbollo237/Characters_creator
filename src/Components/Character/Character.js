import React from 'react'
import CharacterPicture from './CharacterPicture/CharacterPicture'
import CharacterFeatures from './CharacterFeatures/CharacterFeatures'
const Character = (props) => {
    return(
        <>
            <h2>Personnage</h2>

            <div className="row no-gutters">
                <div className="col col-6">
                    <CharacterPicture 
                    leftArrow={props.previousPicture}
                    rightArrow={props.nextPicture}
                    numPicture={props.picture}/>
                </div>
                <div className="col col-6">
                   <CharacterFeatures 
                        intellect={props.intellect}
                        agility={props.agility}
                        strength={props.strength}
                        pointsLeft={props.pointsLeft}
                   />
                </div>
            </div>
        </>     
    )
}
export default Character;
