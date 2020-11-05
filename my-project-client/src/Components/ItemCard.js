import React from 'react'

class ItemCard extends React.Component{

    state = {
        clicked: false
    }

    render(){

        let { title, card_image, description } = this.props.item
        return(
            <div>
                <h1>{title}</h1>
                <img alt="" src={card_image}/>
                <p>{description}</p>
            </div>
        )
    }
}

export default ItemCard


// clickHandler = (e) => {
//     this.setState( {clicked: !this.state.clicked } )
// }

// render(){
//     console.log(this.state.clicked)
//     let { category, avatar } = this.props.interest
//     return(
//         <div>
//             <h1>{category}</h1>
//             <img onClick={this.clickHandler} alt="" src={avatar} />
//             {/* if clicked, render the item container */}
//             {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler}/> : console.log("Must click image to display items")}
//         </div>