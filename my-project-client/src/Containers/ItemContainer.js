import React from 'react'
import ItemCard from '../Components/ItemCard'

class ItemContainer extends React.Component {

    state = {
        // api: [], 
        clicked: false,
        interestId: this.props.interest.id,
        filtered: true
    }

    // componentDidMount(){
    //     fetch("http://localhost:4000/api/v1/items/")
    //     .then(resp => resp.json())
    //     .then(api => this.setState({api: api}))
    //     .catch(console.log)
    // }

    // EL passed down via props to handle interest being clicked
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    // returnsAnArray = () => {
    //     let items = [...this.state.api]
    //     let filteredItems = items.filter((item) => item.interest_id === this.state.interestId )
    //     this.setState({api: filteredItems})
    //     return this.state.api
    // }

    renderItems = () => {
       return this.props.renderItems().map((el) => <ItemCard key={el.id} item={el} clickHandler={this.props.clickHandler} />)
    }

    render(){
    // console.log(this.props.renderItems())
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

   // filterItems = (e) => {
    //     // let items = [...this.state.filteredItems]
    //     // let filteredItems = this.state.filteredItems.filter(item => item.interest_id.includes(this.state.interest) )
    //     // this.setState(() => ({ api: filteredItems }))
    //      return this.renderItems()
    // }

