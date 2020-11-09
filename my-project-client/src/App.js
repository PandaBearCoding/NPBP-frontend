import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserContainer from './Containers/UserContainer'
import InterestContainer from './Containers/InterestContainer'
import FavoriteContainer from './Containers/FavoriteContainer'

class App extends React.Component {

  state = {
    favorites: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/api/v1/favorites/")
    .then(resp => resp.json())
    .then(favs => (this.setState({favorites: favs})))
    .catch(console.log)
  }

  // how to pass interest to FavoriteContainer
  clickHandler = (interest) => {

      fetch('http://localhost:4000/api/v1/favorites/', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ interest_id: interest.id, user_id: 10 })
      })
      .then(resp => resp.json())
      .then(interest => ( 
        this.setState({ 
        favorites: interest
      })))
  }

  deleteHandler = (favObj) =>{
    let newArray = this.state.favorites.filter(fav => fav.id !== favObj.id)
    this.setState({favorites: newArray})
  }

  render(){
    return (
      <div className="App">
        < UserContainer />
        < InterestContainer clickHandler={this.clickHandler} />
        {/* array state in instantiated with is passed down the favoriteContainer via state */}
        < FavoriteContainer favorites={this.state.favorites} deleteHandler={this.deleteHandler}/>
      </div>
    )
  }
}

export default App;
