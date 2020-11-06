import React from 'react'

class UserCard extends React.Component{

    render(){
        let { username, name, location, profile_pic } = this.props.user
        return(
            <div>
                <h1>{name}</h1>
                <p>{username}</p>
                <img alt="" src={profile_pic}/>
                <p>{location}</p>
            </div>
        )
    }
}

export default UserCard