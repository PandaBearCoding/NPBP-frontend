import React from 'react'
import InterestCard from '../Components/InterestCard'

class InterestContainer extends React.Component {

    state = {
        api: [],
        clicked: false
    }

    componentDidMount(){
        fetch("http://localhost:4000/api/v1/interests/")
        .then(resp => resp.json())
        .then(api => this.setState({api: api}))
        .catch(console.log)
    }

    // EL passed down via props to handle interest being clicked (and added to favorites)
    clickHandler() {
        this.props.clickHandler(this.props.interest)
    }

    renderInterests = () => {
        return this.state.api.map((el) => <InterestCard key={el.id} interest={el} clickHandler={this.props.clickHandler}/>)
    }

    render(){
        console.log(this.state.api)
        return(

            <div>
                <h1>All Interests</h1>
                <div>
                    {this.state.api.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}

export default InterestContainer;