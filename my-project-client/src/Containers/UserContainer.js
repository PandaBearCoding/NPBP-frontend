import React from 'react'
import UserCard from '../Components/UserCard'
import CreateUser from '../Components/CreateUser'

class UserContainer extends React.Component{

    state = {
        api: []
    }

    componentDidMount(){
        fetch("http://localhost:4000/api/v1/users/")
        .then(resp => resp.json())
        // .then(console.log)
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
        .then(user => this.setState({api: [...this.state.api, user]}))
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
        // need to pass in delete --> deleteUser={this.props.deleteUser}
        return this.state.api.map((el) => <UserCard key={el.id} user={el} updateHandler={this.updateSubmitHandler} deleteHandler={this.deleteHandler}/>)
    }

    render(){
        return (
            <div>
                <h1>Users</h1>
                <CreateUser newSubmitHandler={this.newSubmitHandler} />
                <div>
                    {/* {this.state.api.length > 0 ? this.renderUsers() : <h1>LOADING</h1>} */}
                    {this.renderUsers()}
                </div>
            </div>

        )
    }
}

export default UserContainer;



