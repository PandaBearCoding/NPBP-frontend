import React from 'react'

class UserCard extends React.Component{

    state = {
        clicked: false,
        name: this.props.user.name,
        username: this.props.user.username, 
        profile_pic: this.props.user.profile_pic, 
        location: this.props.user.location
    }

    updateClickHandler = (e) => {
        this.setState({clicked: true})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localUpdateHandler = (e) => {
        e.preventDefault()
        this.props.updateHandler(this.props.user.id, this.state.name, this.state.username, this.state.profile_pic, this.state.location)
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    localDeleteHandler = (e) => {
        this.props.deleteHandler(this.props.user.id)
    }


    render(){
        let { username, name, location, profile_pic } = this.props.user
        return(
            <div>
                {this.state.clicked ? (
                    <form onSubmit={this.localUpdateHandler}>
                        <input name="name" type="text" value={this.state.name} onChange={this.changeHandler} />
                        <input name="username" type= "text" value={this.state.username} onChange={this.changeHandler} />
                        <input name="profile_pic" type= "text" value={this.state.profile_pic} onChange={this.changeHandler} />
                        <input name="location" type= "text" value={this.state.location} onChange={this.changeHandler} />
                        <button type="submit" >Update Profile</button>
                    </form>
                ) :
                null
                }
                <h1>{name}</h1>
                <p>{username}</p>
                <img className="profile-image" alt="" src={profile_pic}/>
                <p>{location}</p>
                <button onClick={this.updateClickHandler}>Edit Profile</button>
                <button onClick={this.localDeleteHandler}>Delete Profile</button>
            </div>
        )
    }
}

export default UserCard