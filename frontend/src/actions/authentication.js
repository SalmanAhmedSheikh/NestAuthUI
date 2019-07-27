// authentication.js

import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {

    console.log('user',user);
    axios.post('http://localhost:3000/auth/signIn',{ username:'SalmanAhmad',password:'P@ssword1'})
            .then(res => {
              //console.log(res);
                  console.log(res.data);
            })
            .catch(err => {

                console.log('Getting Error',err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}