import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SearchBar from "./search-bar.component";

export default class Navbar extends Component {
    render(){
        return(
            <header>
                    <a className="logo"><Link to="/"><i className="logo-img"/></Link></a>
                    {/* <Link to="/">UrClothes</Link> */}
                    <SearchBar />
                <nav>
                    <div className="lines">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/create">Anunciar Tienda</Link></li>
                        <li><Link to="/user">Crear usuario</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}