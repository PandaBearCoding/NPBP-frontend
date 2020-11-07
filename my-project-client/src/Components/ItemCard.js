import React from 'react'

class ItemCard extends React.Component{

    render(){
        let { title, card_image, description } = this.props.item
        return(
            <div className="itemcard">
                <h1>{title}</h1>
                <img className="itemimage" alt="" src={card_image}/>
                <p>{description}</p>
            </div>
        )
    }
}

export default ItemCard
