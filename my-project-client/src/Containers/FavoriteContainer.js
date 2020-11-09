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


