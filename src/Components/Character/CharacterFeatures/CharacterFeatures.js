import React from 'react'
import Features from './Features/Features'

const CharacterFeatures = (props) => {
    
    return(
        <>
            <div>
                Points restants: <span class="badge bg-success">{props.pointsLeft}</span>
            </div>
            <div>
                <Features nbPoints={props.strength}>Strength</Features>
                <Features nbPoints={props.agility}>Agility</Features>
                <Features nbPoints={props.intellect}>Intelligence</Features>
            </div>
        </>
    )
}
export default CharacterFeatures;