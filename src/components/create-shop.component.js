import React, {Component, component} from 'react';
import axios from 'axios';

export default class CreateShop extends Component {
    constructor(props){
        super(props);

        this.onChangeShopName = this.onChangeShopName.bind(this);
        this.onChangeShopOwner = this.onChangeShopOwner.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            shopname: '',
            shopowner: '',
            title: '',
            description: ''
        }
    }

    onChangeShopName(e){
        this.setState({
            shopname: e.target.value
        })
    }

    onChangeShopOwner(e){
        this.setState({
            shopowner: e.target.value
        })
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();

        const shop = {
            shopname: this.state.shopname,
            shopowner: this.state.shopowner,
            title: this.state.title,
            description: this.state.description
        }

        console.log(shop);
        axios.post('http://localhost:5000/shops/add', shop)
            .then(res=>{console.log(res.data)})

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Anuncia tu tienda!</h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nombre de la tienda"
                        value={this.state.shopname}
                        onChange={this.onChangeShopName}
                    />
                    <input 
                        type="text" 
                        placeholder="Nombre de la tienda"
                        value={this.state.shopowner}
                        onChange={this.onChangeShopOwner}
                    />
                    <input 
                        type="text" 
                        placeholder="Añade un titulo llamativo"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                    />
                    <input 
                        type="text" 
                        placeholder="Añade una descripcion"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                    <input type="submit" value="Anunciar tienda"/>
                </form>
            </div>
        )
    }
}