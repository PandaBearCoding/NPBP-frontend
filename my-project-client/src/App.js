import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserContainer from './Containers/UserContainer'
import InterestContainer from './Containers/InterestContainer'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount(){
    fetch("http://localhost:4000/api/v1/users/42")
    .then(resp => resp.json())
    .then(favs => (this.setState({user: favs})))
    .catch(console.log)
  }

  // how to pass interest to FavoriteContainer within UserCard
  clickHandler = (interest) => {
      fetch("http://localhost:4000/api/v1/users/42/favorites", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ interest_id: interest.id, user_id: 42 })
      })
      .then(resp => resp.json())
      .then(interest => ( 
        this.setState({ 
        user: interest
      })))
  }

  // deleting, not re-rendering 
  deleteHandler = (favObj) => {
    // console.log(favObj)
    let temp = this.state.user.favorites.find(fav => fav.user_id === this.state.user.id && fav.interest_id && favObj.id)    
    // console.log(temp)
    fetch(`http://localhost:4000/api/v1/users/42/favorites/${temp.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    // .then(console.log)
    .then(resp => {
    let newArray = this.state.user.fav_interests.filter(fav_i => fav_i.id !== favObj.id)
    console.log(newArray)
    this.setState({user: {...this.state.user, fav_interests: newArray}})
    })
  }

  render(){
    // console.log("HAPPY", this.state.user)
    // console.log("SAD", this.state.user.favorites)
    return (
      <div className="App">
        {this.state.user != null ?
        (<Switch>
          <Route path="/users" render={()=> <UserContainer component={UserContainer} favorites={this.state.user.fav_interests} deleteHandler={this.deleteHandler} />} />
          {/* < UserContainer /> */}
          <Route path="/interests" render={()=> <InterestContainer clickHandler={this.clickHandler} />} />
          {/* < InterestContainer clickHandler={this.clickHandler} /> */}
          {/* < FavoriteContainer favorites={this.state.favorites} deleteHandler={this.deleteHandler}/> */}
          <Route path="/" render={()=> <h1>Welcome to NPBP</h1>} />
        </Switch>) : <h1>LOADING</h1>}
      </div>
    )
  }
}

export default App;

// grab user, build instance method 
// put user in state 

// acces user, store in state --> DONE 
// then can debug
// instabnce method is user that will return user's fav interests --> have array that we can print 
