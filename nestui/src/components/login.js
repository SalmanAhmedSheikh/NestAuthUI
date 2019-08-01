import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''

        }

        this.Change = this.Change.bind(this);
        this.submit = this.submit.bind(this);


    }
    Change(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    submit(e) {
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault();

         console.log('In Submit');
        axios.post('http://localhost:5000/auth/signIn', { username: this.state.username, password: this.state.password }).then(res => {

         
            this.StoreNTransfer(res);
       
        });

    }


    StoreNTransfer(res) {
        console.log('In Store n Transfer');
        console.log('Before storing token',this.state.username);
        
        localStorage.setItem('cool-jwt', res.data.accessToken);
        this.props.history.push('/Dashboard');

        
    }

    render() {

        return (<div>
            <form onSubmit={e => this.submit(e)}>
                <label>username</label>
                <input type="text" name="username" onChange={e => this.Change(e)} value={this.state.usename} ></input>
                <label>password</label><input type="password" name="password" onChange={e => this.Change(e)} value={this.state.password} ></input>
                <button type="submit">Submit</button>
            </form>
        </div>);
    }

}

export default Login;