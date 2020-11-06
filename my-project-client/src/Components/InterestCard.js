import React from 'react'
import ItemContainer from '../Containers/ItemContainer'
import ItemCard from './ItemCard'

class InterestCard extends React.Component{

    state = {
        clicked: false,
        favorited: false
    }

    // EL passed down from parent via props to handle button being clicked to add interest to favorites
    clickHandler = (e) => {
        this.props.clickHandler(this.props.interest)
    }

    // let us know it was clicked and display the items
    updateItemClickHandler = () => {
        this.setState( {clicked: !this.state.clicked } )
    }

    // goes into state, grab clicked key and set it equal to true
    // if true, store copy in favorites container
    // NEED TO PASS IN BELOW
    updateButtonClickHandler = (e) => {
        this.setState( {favorited: !this.state.favorited } )
    }

 
    //deletes from favorite
    deleteHandler = (e) => {
        this.props.deleteHandler(this.props.interest)
    }

    render(){
        console.log("FAV", this.state.favorited)
        // console.log("CLICK", this.state.clicked)
        // console.log(this.props.interest)
        let { category, avatar } = this.props.interest
        return(
            <div class="interestcard" >
                <h1>{category}</h1>
                <div><img class="interestimage" onClick={this.updateItemClickHandler} alt="" src={avatar} /> </div>
                {this.props.favorite ? <button onClick={this.deleteHandler}>❌</button> : <button onClick={this.clickHandler}>❤️</button>}
                {/* <button onClick={this.updateButtonClickHandler}>
                    {this.props.favorite ? "❌" deleteHandler={this.deleteHandler} : "❤️" clickHandler={this.clickHandler}} */}
                {/* </button> */}
                {/* We don't want to render the ENTIRE item container w/ all items */}
                {/* We want to render the item container with items RELATED to the interest card */}
                    {/* if interest's category === item's interest.id */}
                {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler} /> : null}
            </div>
        )
    }
}

export default InterestCard