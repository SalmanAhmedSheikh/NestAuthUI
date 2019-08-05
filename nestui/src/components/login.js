import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            signInError: ''

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

        }).catch((e) => {
       
            console.log('error',e);
            

          
                this.setState({ signInError: 'Unable to SignIn!! Please verify your credentials ' });
       
       
          
        });

    }


    StoreNTransfer(res) {
        console.log('In Store n Transfer');
        console.log('Before storing token', this.state.username);

        localStorage.setItem('cool-jwt', res.data.accessToken);
        this.props.history.push('/Dashboard');


    }

    render() {

        return (<div>
            <form onSubmit={e => this.submit(e)}>
                <table>
                    <tr>
                        <td colSpan="2">
                       <div style={{ fontSize: "12", color: "red" }}>
                        {this.state.signInError} </div>
                        </td>
                    </tr>
                    <tr>
                        <td>            <label>username</label>
                        </td>
                        <td><input type="text" name="username" onChange={e => this.Change(e)} value={this.state.usename} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>            <label>password</label></td>
                        <td> <input type="password" name="password" onChange={e => this.Change(e)} value={this.state.password} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" >
                           
                        </td>
                        <td> <button value="Sign In"  type="submit">Sign In</button></td>
                    </tr>
                </table>
            </form>
        </div>);
    }

}

export default Login;