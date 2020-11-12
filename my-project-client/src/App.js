import React from 'react'
import './App.css';
import UserContainer from './Containers/UserContainer'
import InterestContainer from './Containers/InterestContainer'
import NavBar from './Components/NavBar'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount(){
    fetch("http://localhost:4000/api/v1/users/51")
    .then(resp => resp.json())
    .then(favs => (this.setState({user: favs})))
    .catch(console.log)
  }

  // how to pass interest to FavoriteContainer within UserCard
  clickHandler = (interest) => {
      fetch("http://localhost:4000/api/v1/users/51/favorites", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ interest_id: interest.id, user_id: 51 })
      })
      .then(resp => resp.json())
      .then(interest => ( 
        this.setState({ 
        user: interest
      })))
  }

  // deleting, not re-rendering 
  deleteHandler = (favObj) => {
    let temp = this.state.user.favorites.find(fav => fav.user_id === this.state.user.id && fav.interest_id && favObj.id)    
    // console.log(temp)
    fetch(`http://localhost:4000/api/v1/users/51/favorites/${temp.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(resp => {
    let newInterestArray = this.state.user.fav_interests.filter(fav_i => fav_i.id !== favObj.id)
    let newFavArray = this.state.user.favorites.filter(fav => fav.id !== temp.id)
    this.setState({user: {...this.state.user, fav_interests: newInterestArray, favorites: newFavArray}})
    })
  }

  render(){
    console.log(this.state.user)
    return (
      <div className="App">
        <NavBar />
        {this.state.user != null ?
        (<Switch>
          <Route path="/users" render={()=> <UserContainer component={UserContainer} favorites={this.state.user.fav_interests} deleteHandler={this.deleteHandler} />} />
          <Route path="/interests" render={()=> <InterestContainer clickHandler={this.clickHandler} />} />
        </Switch>) : <h1>LOADING</h1>}
      </div>
    )
  }
}

export default App;



