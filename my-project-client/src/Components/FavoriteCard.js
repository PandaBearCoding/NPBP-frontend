import React from 'react'

class FavoriteCard extends React.Component{

    deleteHandler = (e) => {
        this.props.deleteHandler(this.props.favorite)
    }
    
    render(){
        let { category, avatar } = this.props.favorite
       
        return(
            <div className="interestcard" >
                <h1>{category}</h1>
                <div><img className="interestimage" alt="" src={avatar} /> </div>
                <button onClick={this.deleteHandler}>❌</button>
            </div>
        )
    }
}

export default FavoriteCard