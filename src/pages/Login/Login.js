import { useState } from 'react';
import useFetch from '../../hooks/useFetch'
import { login } from "../../services/auth";


const Login = () => {

    //Esto que estaba compleo lo saco al auth.js
    // const apiCall = async () => {
    //     try 
    //     } catch
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const [estoEsElDato, EstoEsElError, EstoEsElLoding] = useFetch()  //en generico esto: por si tengo que usar mas de 1
     const [data, error, loading, apiCall] = useFetch({
        service: () => login({ email, password }),
        globalLoader: true
     });

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

   
    return (
        <div style={{ marginTop:"7%" }}>
            <h1>Bienvenido al Login </h1>
            <h2>Ingrese su email y contraseña:</h2>
            <input placeholder="Email" value={email} onChange={handleEmailChange} />
            <input placeholder='Password' value= {password} onChange={handlePasswordChange} />
            <button disabled={loading} onClick={apiCall}>Submit</button>
            <p>{data?.token}</p>
        </div>
    )
}

export default Login
