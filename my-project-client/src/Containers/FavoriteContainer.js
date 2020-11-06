import React from 'react'
import InterestCard from '../Components/InterestCard'

class FavoriteContainer extends React.Component {

    renderInterests = () => {
        return this.props.interests.map((el) => <InterestCard key={el.id} interest={el} clickHandler={this.props.clickHandler} deleteHandler={this.props.deleteHandler} favorite />)
    }

    render(){
        return(
            <div> 
                <h1>Favorites</h1>
                <h3>{this.renderInterests()}</h3>
            </div>
        )
    }
}

export default FavoriteContainer