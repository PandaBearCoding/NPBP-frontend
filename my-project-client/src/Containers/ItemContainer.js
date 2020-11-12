import React from 'react'
import ItemCard from '../Components/ItemCard'

class ItemContainer extends React.Component {

    state = {
        clicked: false,
        // interestId: this.props.interest.id,
        filtered: true
    }

    // EL passed down via props to handle interest being clicked
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    renderIntItems = () => {
        console.log("MADDY", this.props.items)
        return this.props.items.filter(item => item.interest_id === this.props.interest.id)
    }

    renderItems = () => {
       return this.renderIntItems().map((el) => <ItemCard key={el.id} item={el} clickHandler={this.props.clickHandler} />)
    }

    render(){
        // console.log("GOODBYE", this.props.items)
        // console.log("THIS ONE", this.props.interest)
        return(
            <div>
                <div className="itemcontainer">
                    {this.state.filtered ? this.renderItems() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}

export default ItemContainer;

