import React, {Component} from 'react'
import Character from '../../Components/Character/Character'
import Weapons from '../../Containers/Weapons/Weapons'
import Button from '../../Components/Button/Button'

class CharactersCreator extends Component {

    state = {
        character: {
            picture: 1,
            force: 0,
            agility: 0,
            intellect: 0
        }
    }

  render(){  
    return (
        <>>
            <div className="row row-cols-2">
                <div className="col h-50">Picture character part</div>
                <div className="col h-50">Skills part</div>
                <div className="col ">Weapons</div>
            </div>

            <div className="row p-2 m-2">
                <Button btnType="btn-danger" clic={() => {console.log('reset')}}  css="col-6">Reset</Button>
                <Button btnType="btn-success" clic={() => {console.log('create')}} css="col-6">Create</Button>
            </div> 
        </>
    );
  }
}

export default CharactersCreator;
