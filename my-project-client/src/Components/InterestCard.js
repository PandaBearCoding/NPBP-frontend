import React from 'react'
import ItemContainer from '../Containers/ItemContainer'

class InterestCard extends React.Component{

    state = {
        clicked: false
    }

    clickHandler = (e) => {
        this.props.clickHandler(this.props.interest)
    }

    updateClickHandler = () => {
        this.setState( {clicked: !this.state.clicked } )
    }

    render(){
        console.log(this.state.clicked)
        let { category, avatar } = this.props.interest
        return(
            <div>
                <h1>{category}</h1>
                <img onClick={this.updateClickHandler}alt="" src={avatar} />
                {/* if clicked, render the item container */}
                <button onClick={this.clickHandler}>&hearts;</button>
                {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler}/> : console.log("Must click image to display items")}
            </div>
        )
    }
}

export default InterestCard