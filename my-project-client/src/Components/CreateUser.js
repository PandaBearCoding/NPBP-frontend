import React from 'react'

class CreateUser extends React.Component {
    state = {
        name: "",
        username: "",
        profile_pic: "",
        location: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.newSubmitHandler(this.state)
        this.setState({name: "", username: "", profile_pic: "", location: ""})
    }

    render(){
        return(
            <form onSubmit={this.localSubmitHandler}>
                <input name="name" type= "text" placeholder="enter name" value={this.state.name} onChange={this.changeHandler} />
                <input name="username" type= "text" placeholder="enter username" value={this.state.username} onChange={this.changeHandler} />
                <input name="profile_pic" type= "text" placeholder="enter profile picture" value={this.state.profile_pic} onChange={this.changeHandler} />
                <input name="location" type= "text" placeholder="enter location" value={this.state.location} onChange={this.changeHandler} />
                <button>Create Profile</button>
            </form>
        )
    }

}

export default CreateUser 