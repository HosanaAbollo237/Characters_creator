import React, {Component} from 'react'
import CharactersCreator from './Containers/CharactersCreator/CharactersCreator'
import TitleH1 from './Components/TitleH1/TitleH1'
class App extends Component {
  render(){  
    return (
      <div className="container text-center">
        <TitleH1 titleHeading="display-1">Characters Creator</TitleH1>
        <CharactersCreator/>   
      </div>
      );
  }
}

export default App;
