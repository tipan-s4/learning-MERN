import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render(){
        return(
            <nav>
                <Link to="/">UrClothes</Link>
                <div className="lines">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Tiendas</Link></li>
                    <li><Link to="/create">Anunciar Tienda</Link></li>
                    <li><Link to="/user">Crear usuario</Link></li>
                </ul>
            </nav>
        );
    }
}