import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'



class AuthenticateComponet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        };
    }

    componentDidMount() {

        // console.log('In Component did Mount');
        const jwt = localStorage.getItem('cool-jwt');

        // console.log('jwt is here',jwt);

        if (!jwt) {
            console.log('I am in !jwt');
            this.props.history.push('/login');

        }
        else {
            console.log('In else ');
            axios.post('http://localhost:5000/auth/getUser', {}, { headers: { 'authorization': `bearer ${jwt}` } })
                .then(
                    (res) => {
                        console.log('before res.data', res.data);
                        this.setState({ user: res.data });
                        console.log('After res.data', res.data);

                    })
                .catch((err) => {
                    console.log('err', err);
                    localStorage.removeItem('cool-jwt');
                    this.props.history.push('/login');
                });
        }
    }


    render() {

var myuser=this.state;
         console.log('In render');
         console.log('myuser',myuser);
        // console.log('this.state',this.state);

        // console.log('this.state.user',this.state.user);

        if (this.state.user === undefined) {
            return (<div><h1>Loading.....</h1></div>);
        }
        else
        {

            myuser=  `${this.state.user.username}`;
            console.log('myuser',myuser);
        }
        
    
        return (
            <div >    

           {/* {this.state.user.username} */}
                {this.props.children } 
                
            </div>
        )

    }

}

export default withRouter(AuthenticateComponet);