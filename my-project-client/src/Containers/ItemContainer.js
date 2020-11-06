import React from 'react'
import ItemCard from '../Components/ItemCard'

class ItemContainer extends React.Component {

    state = {
        api: [], 
        clicked: false
    }

    componentDidMount(){
        fetch("http://localhost:4000/api/v1/items/")
        .then(resp => resp.json())
        .then(api => this.setState({api: api}))
        .catch(console.log)
    }

    // EL passed down via props to handle interest being clicked
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    renderItems = () => {
        return this.state.api.map((el) => <ItemCard key={el.id} item={el} clickHandler={this.props.clickHandler}/>)
    }

    render(){
        return(

            <div>
                <h2>Items</h2>
                <div>
                    {this.state.api.length > 0 ? this.renderItems() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}

export default ItemContainer;