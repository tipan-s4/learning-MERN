import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render(){
        return(
            <div className="search-bar">
                <div className="search-bar-wrapper">
                    <div className="search-bar-input">
                        <span class="material-icons-outlined"></span>
                        <input type="text" name="shop" id="search-shop" placeholder="Busca una tienda" />
                    </div>
                    <div className="search-bar-results">
                        <ul id="palabras"></ul>
                    </div>
                </div>
            </div>
        );
    }
}