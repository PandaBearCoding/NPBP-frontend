import React from 'react'

class ItemCard extends React.Component{

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

// {this.state.clicked ? <ItemContainer clickHandler={this.clickHandler}/> : console.log("Must click image to display items")}
