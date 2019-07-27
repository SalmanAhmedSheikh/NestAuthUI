import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from  'react-router-dom'

class AuthenticateComponet extends Component{
constructor(props){
    super(props);

    this.state={
        user:undefined
    }
}

componentDidMount(){
    
    console.log('In Component did Mount');
    const jwt=localStorage.getItem('cool-jwt');

    console.log('jwt',jwt);

if(!jwt)
{
    this.props.history.push('/login');
}

axios.post('http://localhost:3000/auth/getUser',{headers:{Authorization:`Bearer ${jwt}`}}).then(res=>this.setState({user:res.data}))
.catch(err=>{
//localStorage.removeItem('cool-jwt');
    this.props.history.push('/login');
});
}

render(){
    if(this.state.user===undefined)
    {
        return (<div><h1>Loading.....</h1></div>);
    }
return (
    <div>
        {this.props.children}
    </div>
)

}

}

export default withRouter(AuthenticateComponet);