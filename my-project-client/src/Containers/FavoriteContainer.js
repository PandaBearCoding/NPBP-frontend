import React from 'react'
import FavoriteCard from '../Components/FavoriteCard'

class FavoriteContainer extends React.Component{

    renderFavorites = () => {
        return this.props.favorites.map((el) => <FavoriteCard key={el.id} favorite={el} deleteHandler={this.props.deleteHandler} />)
    }

    render(){
        if(!this.props.favorites){
            return <h1>LOADING</h1>
        }
        return(
            <div className="favoritecard" >
                <h1>My Favorites</h1>
                {this.renderFavorites()}
            </div>
        )   
    }
}

export default FavoriteContainer


