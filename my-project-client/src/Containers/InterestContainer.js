import React from 'react'
import InterestCard from '../Components/InterestCard'

class InterestContainer extends React.Component {

    state = {
        interestApi: [],
        itemApi: [],
        clicked: false
    }

    componentDidMount(){
        (fetch("http://localhost:4000/api/v1/interests/")
        .then(resp => resp.json())
        .then(api => console.log(api))
        .catch(console.log))
    }

    // EL passed down via props to handle interest being clicked (and added to favorites)
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    renderInterests = () => {
        return this.state.interestApi.map((el) => <InterestCard key={el.id} interest={el} clickHandler={this.props.clickHandler} />)
    }

    render(){
        return(

            <div>
                <h1>Interests</h1>
                <div className="interestcontainer" >
                    {this.state.interestApi.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}

export default InterestContainer;