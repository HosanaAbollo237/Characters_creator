import React from 'react'

const CharacterFeatures = (props) => {
    const styleUl = {listStyleType: "none"}
    return(
        <div>
            <ul style={styleUl}>
                <li>Points lefts: {props.pointsLeft}</li>
                <li>Intellect: {props.intellect}</li>
                <li>Agility: {props.agility}</li>
                <li>Strength: {props.strength}</li>
            </ul>
        </div>
    )
}
export default CharacterFeatures;