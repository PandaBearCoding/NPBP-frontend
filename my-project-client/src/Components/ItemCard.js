
import React from 'react'

class ItemCard extends React.Component{

    render(){
        let { title, card_image, description } = this.props.item
        return(
            <div className="itemcard">
                <h1 className="itemh1">{title}</h1>
                <img className="itemimage" alt="" src={card_image}/>
                <p className="itemdesc">{description}</p>
            </div>
        )
    }
}

export default ItemCard
