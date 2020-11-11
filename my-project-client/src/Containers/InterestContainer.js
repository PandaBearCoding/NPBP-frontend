import React from 'react'
import InterestCard from '../Components/InterestCard'

class InterestContainer extends React.Component {

    state = {
        interestApi: [],
        itemApi: [],
        clicked: false
    }

    componentDidMount(){
        Promise.all([
            fetch("http://localhost:4000/api/v1/interests/"),
            fetch("http://localhost:4000/api/v1/items/"),
          ])
          .then(([res1, res2]) => { 
            return Promise.all([res1.json(), res2.json()]) 
         })
         .then(([res1, res2]) => {
           this.setState({interestApi: res1})
           this.setState({itemApi: res2 })
         });
   }

    // EL passed down via props to handle interest being clicked (and added to favorites)
    clickHandler = () => {
        this.props.clickHandler(this.props.interest)
    }

    renderInterests = () => {
        return this.state.interestApi.map((el) => <InterestCard key={el.id} interest={el} clickHandler={this.props.clickHandler} items={this.state.itemApi} />)
    }

    render(){
        // console.log(this.state.interestApi, this.state.itemApi)
        return(
            <div>
                <h1>Interests</h1>
                <div className="interestcontainer" >
                    {/* if path = this render this, 
                    if path = this render this Swicth */ }
                    {this.state.interestApi.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
                    {/* <Route path="/interests/:id/items" render={()=> <ItemContainer interest={this.props.interest} renderItems={this.renderItems} /> } />  */}
                </div>
            </div>
        )
    }
}

export default InterestContainer;