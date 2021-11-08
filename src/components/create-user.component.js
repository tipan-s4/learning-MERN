import React, {Component, component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePswd = this.onChangePswd.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            useremail: '',
            userpswd: ''
        }
    }

    onChangeUserName(e){
        this.setState({
            username: e.target.value
        })
    }
    
    onChangeUserEmail(e){
        this.setState({
            useremail: e.target.value
        })
    }
    
    onChangePswd(e){
        this.setState({
            userpswd: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            useremail: this.state.useremail,
            userpswd: this.state.userpswd
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res=>{console.log(res.data)})

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Crea una cuenta</h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nombre de usuario"
                        value={this.state.username}
                        onChange={this.onChangeUserName}
                    />
                    <input 
                        type="email" 
                        placeholder="Introduce tu email"
                        value={this.state.useremail}
                        onChange={this.onChangeUserEmail}
                    />
                    <input 
                        type="password" 
                        placeholder="Introduce tu contraseña"
                        value={this.state.userpswd}
                        onChange={this.onChangePswd}
                    />
                    <input type="submit" value="Completar registro"/>
                </form>
            </div>
        )
    }
}