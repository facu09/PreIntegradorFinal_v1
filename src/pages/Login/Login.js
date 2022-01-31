import { useState } from 'react';
import useFetch from '../../hooks/useFetch'
import { login } from "../../services/auth";
import './Login.css';

import  imgLogin from '../../Imagenes/InicioSesion_Copia3.png'


const Login = () => {

    //Esto que estaba compleo lo saco al Fectch
    // const apiCall = async () => {
    //     try 
    //     } catch
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // estados definidos por mi
    const [msgError, setMsgError] = useState('');
    const [token, setToken] = useState('');

    
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

    const onClickSubmit = () => {
        
        apiCall()
        alert ("Paso por el onClickSubmit y el error es: " + error);
        alert ("El token es: " + data.token);
        if (error) {
            setMsgError(error);
            setToken('');
            alert("paso por el Si: tiene error, y el error es: " + error)

        } else {
            setMsgError('');
            setToken(data.token);
            alert("paso por el else: no tiene error, y el token es: " + data.token)
                 //Guardo datos del usuario:
                 localStorage.setItem('emailUsuario', email)
                 window.location.replace("/home");  // subo 2 niveles y estoy en el raiz
        }

    }

    return (
        // <div style={{ marginTop:"7%" }}>
        //     <h1>Bienvenido al Login </h1>
        //     <h2>Ingrese su email y contraseña:</h2>
        //     <input placeholder="Email" value={email} onChange={handleEmailChange} />
        //     <input placeholder='Password' value= {password} onChange={handlePasswordChange} />
        //     <p style={{color: 'red' }}> {msgError} </p>
        //     {/* <p style={{color: 'red' }}> {error} </p> */}
        //     <button disabled={loading} onClick={onClickSubmit}>Submit</button>
        //     {/* <button disabled={loading} onClick={apiCall}>Submit</button> */}
        //     {/* <p>El Token es: {data?.token}</p> */}
        //     <p>El Token es: {token}</p>
        // </div>

        <div Class="Portada_Login">
            <div Class="Card_Login">
                <div class="ImagenUsuario">
                    <img src={imgLogin} alt="Inicio de Sesion"/>
                </div>
                <div class="IniciarSesion">
                    <p>Iniciar Sesión</p>
                </div>
                <div class= "Etiquetas">
                    <input class="CamposEntrada" placeholder="Email" onChange={handleEmailChange} value={email} type="email" />
                </div>
                <div class= "Etiquetas">
                    <input class="CamposEntrada CampoEntradaPass"  placeholder="Password" onChange={handlePasswordChange} value={password}  type="password" />
                </div>
                
                <p class= "pError" style={{color: 'red' }}> Error: {error}  </p>

                <div class= "Etiquetas" tabindex="-1">
                    <a class ="AHref_submit"  tabindex="-1">  
                        <button class="Submit" disabled={loading} onClick={onClickSubmit} > <ins>E</ins>ntrar</button>  
                    </a>
                </div>
                <div class= "Etiquetas" tabindex="-1">
                    {/* <a class ="AHref_submit" href="../../index.html" tabindex="-1">   */}
                    <a class ="AHref_submit" href="../../index.html" tabindex="-1">  
                        <button class="CancelarBtn"> <ins>C</ins>ancelar</button>
                    </a>
                </div>

                <p class="pToken" >El Token es: {token}</p>

                <div class= "Etiquetas" tabindex="-1">
                    {/* <!-- <a class ="AHref_submit" href="" tabindex="-1"> --> */}
                        <button id="btnOlvidePass" class="OlvidePass"> <ins>O</ins>lvidé mi password</button>
                    {/* <!-- </a> --> */}
                </div>
                <div class= "Etiquetas" tabindex="-1">
                    {/* <!-- por cada '../'' subo un nivel de carpeta --> */}
                    {/* <a class ="AHref_submit" href="../Register/register.html" tabindex="-1">   */}
                        <button class="OlvidePass"> C<ins>r</ins>ear una cuenta</button>
                    {/* </a>  */}
                </div>  
            </div>
        </div>
    )
}

export default Login
