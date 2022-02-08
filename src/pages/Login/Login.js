import { useState } from 'react';
// import useFetch from '../../hooks/useFetch'
// import { login } from "../../services/auth";
import './Login.css';

import  imgLogin from '../../Imagenes/InicioSesion_Copia3.png'

// Se esta usando este backend https://reqres.in/ , en la entada del POST:  LOGIN - SUCCESSFUL
// Para loguearse usamos estas credendiales
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
// Si uso el Backend de Juli: es el link: https://back-sandbox.herokuapp.com/api/auth/login
// Para loguearse usamos estas credendiales
// {
//     "email": "facu1@gmail.com", o "juli@gmail.com"
//     "password": "pass12345"
// }


alert ("Componente Login: 0 - ejecucion Previa")

const Login = () => {

    // alert ('Componente Login 1 - Inicio Ejecución interior del componente Login.js = ()');

    //Estados para los inputs
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    // estados definidos por mi
    // const [msgError, setMsgError] = useState('');
    // const [token, setToken] = useState('');

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onClickSubmitLogin = async (e) => {
        try{
            e.preventDefault()    // para que no recarguela pagina   es para los botones submit   e????   es el evento   event  
    
            const body = {
                email: email,
                password: password
            };
    
            // Prueba para ver que funcione el evento que cree, y que puedo recuperar los valores de email y passwor 
            // console.log('Pasó por el onSubmitLogin, el mail es: ' + email.value + ' y el Password es: ' + password.value);
            alert('Pasó por onSubmitLogin: Tenemos Email: -> ' +  email + ", la Password es: " + password);
            
            // Ejecuto el Login con el Fetch mando el email y el passwor y si logea bien recupera el token, 
            const response = await fetch('https://back-sandbox.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
            //Recupero el token
            //      const token = await response.json();  //el token es un objeto
            // REPASO COMO ACCEDER A LAS PROPIEDADES DE UN OBJETO  // objetoPiola["propiedad"])
            //devuelve --> el token es ===  {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZ…I0M30.DplCA07ikkI8STZQMe6hekDpte681VV_gSt-n83cPfk'}
            //Ejemplos para mostrarlos
            // console.log ("el token es === ", token);
            // console.log(token["token"]);
            // alert ("El token es " +  token["token"]);  //-->  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZ…I0M30. DplCA07ikkI8STZQMe6hekDpte681VV_gSt-n83cPfk'
            // localStorage.setItem('token', token["token"]);
            
    
            //Recupero el token como un string desestructurado
            const { token } = await response.json();
            console.log ("el token es === ", token);
    
            localStorage.setItem('token', token);
        
            //ESTO LO PUEDO BORRAR: lo use para probar recuperar del localStorage
            // //Guardo datos del usuario:
            // // console.log ("Voy a guardar el email en el storage: " + email.value);
            // localStorage.setItem('emailUsuario', email.value);
            // // console.log("El emailUsuario recuperado el Storage es --> " + localStorage.getItem('emailUsuario'));
            // lsToken1 = localStorage.getItem('token');  // ahora es string token1
            // // console.log ("El token1 recuperado es: ==> " + lsToken1);
    
            //Si se logueo bien!!
            if (token) {
                //Guardo datos del usuario:
                localStorage.setItem('token', token);
                localStorage.setItem('emailUsuario', email);
                window.location.replace("/home");  
            }else {
                alert ("\n ¡El Email o la Contraseña son Incorrectos! \n \n Vuelva a Intentarlo.");
                //Blanqueo el email y la contraseña para que las cargue de nuevo
                email.value = "";
                password.value = "";
                email.focus();
            }
        
        } catch (error) {
            console.log ('Error en la función onSubmitLogin: ' + error)
            alert("Componente Loguin: Error: " + error);
        }
    };

    return (
 
        <div className="Portada_Login">
            <div className="Card_Login">
                <div className="ImagenUsuario">
                    <img src={imgLogin} alt="Inicio de Sesion"/>
                </div>
                <div className="IniciarSesion">
                    <p>Iniciar Sesión</p>
                </div>
                <div className= "Etiquetas">
                    <input className="CamposEntrada" placeholder="Email" onChange={handleEmailChange} value={email} type="email" />
                </div>
                <div className= "Etiquetas">
                    <input className="CamposEntrada CampoEntradaPass"  placeholder="Password" onChange={handlePasswordChange} value={password}  type="password" />
                </div>
                
                {/* <p className= "pError" style={{color: 'red' }}>{error}</p> */}

                <div className= "Etiquetas" tabIndex="-1">
                    <a className ="AHref_submit"  tabIndex="-1">  
                        <button className="Submit" onClick={onClickSubmitLogin} > <ins>E</ins>ntrar</button>  
                    </a>
                </div>
                <div className= "Etiquetas" tabIndex="-1">
                    {/* <a className ="AHref_submit" href="../../index.html" tabIndex="-1">   */}
                    <a className ="AHref_submit" href="../../index.html" tabIndex="-1">  
                        <button className="CancelarBtn"> <ins>C</ins>ancelar</button>
                    </a>
                </div>

                {/* <p className="pToken" >{ token }</p> */}

                <div className= "Etiquetas" tabIndex="-1">
                    {/* <!-- <a className ="AHref_submit" href="" tabIndex="-1"> --> */}
                        <button id="btnOlvidePass" className="OlvidePass"> <ins>O</ins>lvidé mi password</button>
                    {/* <!-- </a> --> */}
                </div>
                <div className= "Etiquetas" tabIndex="-1">
                    {/* <!-- por cada '../'' subo un nivel de carpeta --> */}
                    {/* <a className ="AHref_submit" href="../Register/register.html" tabIndex="-1">   */}
                        <button className="OlvidePass"> C<ins>r</ins>ear una cuenta</button>
                    {/* </a>  */}
                </div>  
            </div>
        </div>
    )
}

export default Login
