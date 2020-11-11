import React from 'react'
import UserCard from '../Components/UserCard'
import CreateUser from '../Components/CreateUser'
import {Route, Switch} from 'react-router-dom'
import FavoriteContainer from './FavoriteContainer'

class UserContainer extends React.Component{

    state = {
        api: []
    }

    componentDidMount(){
        fetch("http://localhost:4000/api/v1/users/")
        .then(resp => resp.json())
        .then(api => this.setState({api: api}))
        .catch(console.log)
    }

    newSubmitHandler = (newUser) => {
        fetch('http://localhost:4000/api/v1/users', {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(user => this.setState({api: [ user,...this.state.api ]}))
        .catch(console.log)
    }

    updateSubmitHandler = (id, name, username, profile_pic, location) => {
        let updateUser = { 
            name: name, 
            username: username, 
            profile_pic: profile_pic, 
            location: location
        }
        fetch(`http://localhost:4000/api/v1/users/${id}`, {
            method: "PATCH", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(response => response.json())
        .then(user => {
            let newArray = [...this.state.api]
            let foundObject = newArray.find(el => el.id === user.id)
             newArray[newArray.indexOf(foundObject)] = user
                this.setState({api: newArray})
        })
        .catch(console.log)
    }

    deleteHandler = (userId) => {
        fetch(`http://localhost:4000/api/v1/users/${userId}`, {
             method: "DELETE"
        })
        
        .then(response => response.json())
        .then((response) => {
            let newArray = this.state.api.filter(user => user.id !== userId)
            this.setState({api: newArray})
        })
    }

    renderUsers = () => {
        return this.state.api.map((el) => <UserCard key={el.id} user={el} updateHandler={this.updateSubmitHandler} deleteHandler={this.deleteHandler}/>)
    }

    favIdArray = () => {
        let needFavId = this.state.api.map((el) => el.favorites)
        return needFavId[0]
    }

    favArray = () => {
        // iterate through fav_interests to pass down to FavoriteContainer via favorites key
        let iterate = this.state.api.map((el) => el.fav_interests)
        return iterate[0]
    }

    render(){
        let favHelper = this.favArray()
        let favIdHelper = this.favIdArray()
        // console.log(this.favArray())
        // console.log(this.favIdArray())
        return (
            <div>
                <h1>Users</h1>
                <CreateUser newSubmitHandler={this.newSubmitHandler} />
                <Switch>
                    <Route path="/users/:id" render={(routerProps)=> {
                        let id = parseInt(routerProps.match.params.id)
                        let user 
                        if(this.state.api.length > 0){
                            user = this.state.api.find(el => el.id === id)
                        }
                        return ( 
                        <>
                            {this.state.api.length > 0 ?
                            <div>
                                <UserCard user={user} updateHandler={this.updateSubmitHandler} deleteHandler={this.deleteHandler} />
                                <FavoriteContainer favorites={favHelper} favoritesId ={favIdHelper} deleteHandler={this.props.deleteHandler} />                            </div>
                                : 
                                <h1>LOADING</h1>
                            }
                        </>
                        )
                    }} />
                    <Route path="/users" render={()=> {
                        return(
                        <div>
                            {this.state.api.length > 0 ? this.renderUsers() : <h1>LOADING</h1>}
                            {/* {this.renderUsers()} */}
                        </div>
                        )
                    }}/>
                </Switch>
            </div>

        )
    }
}

export default UserContainer;



