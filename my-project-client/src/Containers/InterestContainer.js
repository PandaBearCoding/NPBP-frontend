import React from 'react'
import InterestCard from '../Components/InterestCard'
import ItemContainer from './ItemContainer'
import {Route, Switch} from 'react-router-dom' 

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
           console.log("Item API", this.state.itemApi)
         });
    }

    // EL passed down via props to handle interest being clicked (and added to favorites)
    clickHandler = () => {
        this.props.clickHandler(this.props.interest)
    }

    renderInterests = () => {
        // console.log(this.state.itemApi)
        return this.state.interestApi.map((el) => <InterestCard key={el.id} interest={el} clickHandler={this.props.clickHandler} items={this.state.itemApi} />)
    }

    render(){
        // console.log(this.state.interestApi, this.state.itemApi)
        console.log("interest items", this.state.itemApi)
        return(
            <div>
                <div className="interestcontainer">
                    {this.state.interestApi.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
                </div>
                {/* <Switch>
                    <Route path="/interests/:id/items" render={()=> <ItemContainer interest={this.props.interest} renderItems={this.renderItems} items={this.state.itemApi} />}/>
                    <Route path="/interests" render={()=> 
                        <div className="interestcontainer">
                            {this.state.interestApi.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
                        </div> }/>
                </Switch>
            </div> */}


{/* <Route path="/users/:id" render={(routerProps)=> {
    let id = parseInt(routerProps.match.params.id)
    let user 
    if(this.state.api.length > 0){
        user = this.state.api.find(el => el.id === id)
    }
    return ( 
    <>
        {this.state.api.length > 0 ?
        <div>
            <UserCard user={user} updateHandler={this.updateSubmitHandler} deleteHandler={this.deleteHandler} />
            <FavoriteContainer favorites={favHelper} favoritesId ={favIdHelper} deleteHandler={this.props.deleteHandler} />
            <NavLink to={"/interests/"}>
                <h3 class="viewall">View All Interests</h3>
            </NavLink>
        </div>
            : 
            <h1>LOADING</h1>
        }
    </>
    )
}} />
<Route path="/users" render={()=> {
    return(
    <div>
        <CreateUser newSubmitHandler={this.newSubmitHandler} />
        {this.state.api.length > 0 ? this.renderUsers() : <h1>LOADING</h1>}
        {/* {this.renderUsers()} */}
//     </div>
//     )
// }}/> */}


            // {/* if path = this render this, 
            //         if path = this render this Swicth */ }

            //         {/* <Switch>
            //         <Route path="/interests" render={() => {
            //             <div className="interestcontainer">
            //                 {this.state.interestApi.length > 0 ? this.renderInterests() : <h1>LOADING</h1>}
            //             </div> 
            //         }}/>
            //         <Route path="/interests/:id/items" render={()=> <ItemContainer interest={this.props.interest} renderItems={this.renderItems} /> } />
            //     </Switch>  */}











        )
    } 
}

export default InterestContainer;

   




        