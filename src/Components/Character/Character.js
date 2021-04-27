import React from 'react'


const Character = (props) => {
    return(
        <>
            <h2>Personnage</h2>

            <div className="row row-cols-2">
                <div className="col h-50">Picture: {props.picture}</div>
                <div className="col h-50">
                    Strength: {props.strength} <br/>
                    Agility: {props.agility} <br/>
                    Intellect: {props.intellect} <br/>
                </div>
                <div className="col ">Weapons</div>
            </div>
        </>
    )
}
export default Character;
