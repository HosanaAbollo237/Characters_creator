import React from 'react'
import CharacterPicture from './CharacterPicture/CharacterPicture'

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
                    Strength: {props.strength} <br/>
                    Agility: {props.agility} <br/>
                    Intellect: {props.intellect} <br/>
                </div>
            </div>
        </>     
    )
}
export default Character;
