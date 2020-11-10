import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserContainer from './Containers/UserContainer'
import InterestContainer from './Containers/InterestContainer'
import FavoriteContainer from './Containers/FavoriteContainer'
import {Route, Switch} from 'react-router-dom'

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

  // post is working, can add new fav to DB 
  // issue = rendering favorites

  deleteHandler = (favObj) =>{
    let newArray = this.state.favorites.filter(fav => fav.id !== favObj.id)
    this.setState({favorites: newArray})
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/users" render={()=> <UserContainer component={UserContainer}/>} />
          {/* < UserContainer /> */}
          <Route path="/interests" render={()=> <InterestContainer clickHandler={this.clickHandler} />} />
          {/* < InterestContainer clickHandler={this.clickHandler} /> */}
          // this,state,user.favorites 
          <Route path="/favorites" render={()=> <FavoriteContainer favorites={this.state.favorites} deleteHandler={this.deleteHandler} />} />
          {/* < FavoriteContainer favorites={this.state.favorites} deleteHandler={this.deleteHandler}/> */}
          <Route path="/" render={()=> <h1>Welcome to NPBP</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App;
