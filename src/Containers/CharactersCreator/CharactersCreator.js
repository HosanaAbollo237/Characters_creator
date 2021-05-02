import React, {Component} from 'react'
import Character from '../../Components/Character/Character'
import Weapons from '../../Containers/Weapons/Weapons'
import Button from '../../Components/Button/Button'

class CharactersCreator extends Component {

    state = {
        character: {
            picture: 1,
            strength: 3,
            agility: 2,
            intellect: 4,
        },
        pointsLeft: 7
    }


    handlePreviousPicture = () => {
        this.setState((oldState) => {
            let newCharacter = {...oldState.character}
            if(oldState.character.picture <= 1){
                newCharacter.picture = 3
            }else {
                newCharacter.picture--
            }
            return{
                character: newCharacter
            }
        })
    }

    handleNextPicture = () => {
        this.setState((oldState) => 
        {
            let newCharacter = {...oldState.character}
            if(oldState.character.picture >= 3){
                newCharacter.picture = 1
            }else {
                newCharacter.picture++
            }
            return{
                character: newCharacter
            }
        })
    }


  render(){  
    return (
        <>
            <Character 
                /* Envoie de ttes les props personnage via spread operator */
                {...this.state.character} 
                pointsLeft = {this.state.pointsLeft} 
                /* Ces deux methodes permettant de gerer l'image envoyée au sous composant impage du personnage (CharacterPicture) */
                previousPicture={this.handlePreviousPicture}
                nextPicture={this.handleNextPicture}
            />
            <Weapons />

            <div className="row p-2 m-2">
                <Button btnType="btn-danger" clic={() => {console.log('reset')}}  css="col-6">Reset</Button>
                <Button btnType="btn-success" clic={() => {console.log('create')}} css="col-6">Create</Button>
            </div> 
        </>
    );
  }
}

export default CharactersCreator;
