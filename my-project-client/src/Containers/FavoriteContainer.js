import React from 'react'
import FavoriteCard from '../Components/FavoriteCard'

class FavoriteContainer extends React.Component{

    renderFavorites = () => {
        return this.props.favorites.map((el) => <FavoriteCard key={el.id} favorite={el} deleteHandler={this.props.deleteHandler} />)
    }

    deleteHandler = () => {
        this.props.deleteHandler(this.props.favorites)
    }

    render(){
        return(
            <div className="favoritecard" >
                <h1>My Favorites</h1>
                {this.renderFavorites()}
            </div>
        )
    }
}

export default FavoriteContainer


// implement serializers -- skipping logging in/ signing up 
// looking at it like user is already signed in 
// make fetch to the DB to grab that user's info 
// part of user's info should be all of their favs 
// don't need separate route - when we fetch a user, it iwll respond with favs 
// implement serializer - when we retrieve info about a user, here's the data we want to acompany that (favs is part of this)
// when server responds with user data, save in state in FE --> SSOT 
// user goes to create a new fav, send to BE - grab user's ID, create fav on BE --> that route should respond 
// with a new instance of that user (bc it will have an additional fav inside its relationships)
// then we go into state - replacing old isntance w/ new instance of user 
// set state in App - App will re-render which will trigeer all other containers to re-render and recieve a new user prop 
// can iterate through this and render to screen 

