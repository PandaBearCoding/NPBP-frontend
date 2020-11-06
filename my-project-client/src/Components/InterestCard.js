import React from 'react'
import ItemContainer from '../Containers/ItemContainer'
// import ItemCard from './Components/ItemCard'

class InterestCard extends React.Component{

    state = {
        clicked: false,
        favorited: false
    }

    // EL passed down from parent via props to handle button being clicked to add interest to favorites
    clickHandler = (e) => {
        this.props.clickHandler(this.props.interest)
    }

    // goes into state, grab clicked key and set it equal to true
    // if true, store copy in favorites container
    updateItemClickHandler = () => {
        this.setState( {clicked: !this.state.clicked } )
    }

    updateButtonClickHandler = () => {
        this.setState( {favorited: !this.state.favorited } )
    }

    // categoryItems = () => {
    //     if (InterestCard.category === ItemCard.interest.id) {
    //         // render items 
    //         return < ItemContainer/>
    //       } else {
    //         null
    //     }
    // }

    render(){
        console.log(this.state.clicked)
        let { category, avatar } = this.props.interest
        return(
            <div>
                <h1>{category}</h1>
                <img onClick={this.updateItemClickHandler} alt="" src={avatar} />
                <button onClick={this.clickHandler}>&hearts;</button>
                {/* We don't want to render the ENTIRE item container w/ all items */}
                {/* We want to render the item container with items RELATED to the interest card */}
                    {/* if interest's category === item's interest.id */}
                {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler} /> : null}
            </div>
        )
    }
}

export default InterestCard