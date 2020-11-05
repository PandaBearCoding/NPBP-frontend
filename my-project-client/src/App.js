import React from 'react'
// import logo from './logo.svg';
import './App.css';
import UserContainer from './Containers/UserContainer'
import InterestContainer from './Containers/InterestContainer'
import FavoriteContainer from './Containers/FavoriteContainer'

class App extends React.Component {

  state = {
    favorite: []
  }

  clickHandler = (interest) => {
    // how to pass interest to FavoriteContainer
    let copiedArray = [interest, ...this.state.favorite]
    this.setState(() => ({favorite: copiedArray}))
  }

  render(){
    return (
      <div className="App">
        < UserContainer />
        < InterestContainer clickHandler={this.clickHandler} />
        {/* array state in instantiated with is passed down the favoriteContainer via state */}
        < FavoriteContainer interests={this.state.favorite} />
      </div>
    )
  }
}

export default App;
