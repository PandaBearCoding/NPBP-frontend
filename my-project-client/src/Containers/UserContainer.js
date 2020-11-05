import React from 'react'
import UserCard from '../Components/UserCard'

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

    renderUsers = () => {
        return this.state.api.map((el) => <UserCard key={el.id} user={el} />)
    }

    render(){
        return (
            <div>
                <h1>All Users</h1>
                <div>
                    {/* {this.state.api.length > 0 ? this.renderUsers() : <h1>LOADING</h1>} */}
                    {this.renderUsers()}
                </div>
            </div>

        )
    }
}

export default UserContainer;



