import React from 'react'
import ItemContainer from '../Containers/ItemContainer'
// import {Route} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'

class InterestCard extends React.Component{

    state = {
        clicked: false,
    }

    // EL passed down from parent via props to handle button being clicked to add interest to favorites
    addToFavHandler = (e) => {
        this.props.clickHandler(this.props.interest)
        // this.setState(previousState => ({favorited: !previousState.favorited }) )
    }

    // let us know it was clicked and display the items
    updateItemClickHandler = (e) => {
        this.setState(previouState => ({ clicked: !previouState.clicked }))
    }

    deleteHandler = (e) =>{
        this.props.deleteHandler(this.props.interest)
    }
    
    renderItems = () => {
        return this.props.items.filter(item => item.interest_id === this.props.interest.id)
    }

    render(){
    
        let { category, avatar } = this.props.interest

        return(
            <div className="interestcard" >
                {/* <NavLink to={"/interests/:id/items"}> */}
                <h1>{category}</h1>
                <div><img className="interestimage" onClick={this.updateItemClickHandler} alt="" src={avatar} /></div>
                {/* </NavLink> */}
                <button onClick={this.addToFavHandler}>❤️</button>
                {this.state.clicked ? <ItemContainer interest={this.props.interest} renderItems={this.renderItems}  /> : null}
                {/* {this.state.clicked ? <Route path="/items" render={()=> <ItemContainer interest={this.props.interest} renderItems={this.renderItems} />} /> : null} */}
                {/* {this.props.favorite ? <button onClick={this.deleteHandler}>❌</button> : <button onClick={this.addToFavHandler}>❤️</button>} */}
            </div>
        )
    }
}

export default InterestCard