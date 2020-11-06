import React from 'react'
import ItemContainer from '../Containers/ItemContainer'

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

    render(){
        console.log(this.state.clicked)
        let { category, avatar } = this.props.interest
        return(
            <div>
                <h1>{category}</h1>
                <img onClick={this.updateItemClickHandler} alt="" src={avatar} />
                <button onClick={this.clickHandler}>&hearts;</button>
                {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler}/> : null}
            </div>
        )
    }
}

export default InterestCard