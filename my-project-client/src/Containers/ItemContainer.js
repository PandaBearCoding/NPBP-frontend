import React from 'react'
import ItemCard from '../Components/ItemCard'

class ItemContainer extends React.Component {

    state = {
        clicked: false,
        interestId: this.props.interest.id,
        filtered: true
    }

    // EL passed down via props to handle interest being clicked
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    renderItems = () => {
       return this.props.renderItems().map((el) => <ItemCard key={el.id} item={el} clickHandler={this.props.clickHandler} />)
    }

    render(){
        return(
            <div>
                <h2>Items</h2>
                <div className="itemcontainer">
                    {this.state.filtered ? this.renderItems() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}

export default ItemContainer;

