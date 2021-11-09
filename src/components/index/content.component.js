import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ShopList from "../shop-list.component";

export default class Content extends Component {
    render(){
        return(
            <div className="content">
                <ShopList />
            </div>
        );
    }
}