import React from 'react'

class UserCard extends React.Component{

    // need onClick in button
    // handleDelete = (e) => {
    //     fetch(`http://localhost:4000/users/${this.props.user.id}`, {
    //         method: "DELETE"
    //     })
    //     .then(response => response.json())
    //     .then((response) => {
    //         this.deleteUser(this.props.user.id)
    //     })
    // }

    render(){
        let { username, name, location, profile_pic } = this.props.user
        return(
            <div>
                <h1>{name}</h1>
                <p>{username}</p>
                <img alt="" src={profile_pic}/>
                <p>{location}</p>
                <button>Edit Profile</button>
                <button onClick={this.handleDelete}>Delete Profile</button>
            </div>
        )
    }
}

export default UserCard