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

  // does this go down into the Intereest Container bc that's where the API is held?
  clickHandler = (interest) => {
    // how to pass interest to FavoriteContainer
    let copiedArray = [interest, ...this.state.favorite]
    this.setState(() => ({favorite: copiedArray}))
  }

  // must pass to UserContainer --> deleteUser={this.deleteUser}
  // deleteUser = (userId) => {
  //   let copyOfUsers = [...this.state.api].filter((user) => {
  //   return user.id !== userId
  //   })
  //   this.setState({
  //   users: copyOfUsers
  //   })
  // }

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
