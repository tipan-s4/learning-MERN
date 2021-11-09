import React, {Component, component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


const Shop = props => (
    <div className="card">
        <div className="card-image"><img></img></div>
        <div className="card-content">v
            <h2 className="card-shop-name">{props.shop.shopname}</h2>
            <h2 className="card-title">{props.shop.title}</h2>
            <p className="card-text">{props.shop.description}</p>
            {/* <Link to={"/edit/"+props.shop._id}>Edit</Link>
            <button onClick={()=>props.deleteShop(props.shop._id)}>Delete</button> */}
        </div>
    </div>
)

export default class ShopList extends Component {
    constructor(props){
        super(props);

        // this.deleteShop = this.deleteShop.bind(this);

        this.state = {shops: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/shops/')
            .then(res =>{
                this.setState({shops: res.data})
            })
            .catch(err => console.log(err))
    }

    // deleteShop(id){
    //     axios.delete('http://localhost:5000/shops/'+id)
    //         .then(res => console.log(res))

    //     this.setState({
    //         shops: this.state.shops.filter(el => el._id !== id)
    //     })
    // }

    shopList(){
        return this.state.shops.map(currentshop =>{
            // return <Shop shop={currentshop} deleteShop={this.deleteShop} key={currentshop._id}></Shop>;
            return <Shop shop={currentshop} key={currentshop._id}></Shop>;
        })
    }

    render(){
        return(
            <div className="cards">
                { this.shopList() } 
            </div>
        )
    }
}
