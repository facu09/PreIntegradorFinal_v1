import axios from 'axios';

export const login = ({ email, password }) => {
    
    // antes de usar axios el fetch manual----------------
    // return fetch ('http://reqres.in/api/login', {
    //     method: 'POST',
    //     body: JSON, stringify ({
    //         email, 
    //         password
    //     })     
    //como el return devuelve una sola cosas se podrian sacar las llaves.

    return axios.post('https://reqres.in/api/login', {
        email, 
        password
    });
};