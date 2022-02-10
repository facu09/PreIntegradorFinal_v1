import './Register.css';
// import './mediaQLogin.css';  //importo meida queries
import  imgLogin from '../../Imagenes/InicioSesion_Copia3.png';
import { useState, useEffect } from 'react';



//  alert ("Componenete Register: 0 - Ejecución Previa del Register.js");
console.log ("Componenete Register: 0 - Ejecución Previa del Register.js");

const Register = () => {
    return (
        // <div style={{ marginTop:"7%" }} >
        //     <h1>Este es el Formulario de Registro</h1>
        //     <h2> Aca vendrá el futuro formulario de Registro </h2>
        // </div>
    <div className="Rgst_PortadaPg">
        <div className="Rgst_Card">
            <div className="Rgst_ImagenUsuario">
                <img src={imgLogin} alt="Inicio de Sesion"/>
            </div>
            <div className="Rgst_CntNuevaCuenta">
                <p>Alta nueva cuenta:</p>
                <form >
                    <div className="Rgst_FormCuenta" action="">
                        <div className="Rgst_container-input">
                            <label for="email">Email:</label>
                            <input id = "email" className="Rgst_CamposEntrada" type="email" name="email" placeholder="Ingrese su email"/>
                        </div>
                        <div className="Rgst_container-input">
                            <label for="name">Nombre:</label>
                            <input id= "name" className="Rgst_CamposEntrada" type="text" name="name" placeholder="Ingrese su nombre"/>
                        </div>
                        <div className="Rgst_container-input">
                            <label for="lastName">Apellido:</label>
                            <input id= "lastName" className="Rgst_CamposEntrada" type="text" name="lastName" placeholder="Ingrese su nombre"/>
                        </div>
                        <div className="Rgst_container-input">
                            <label for="nombre">Edad:</label>
                            <input id= "age" className="Rgst_CamposEntrada" type="text" name="age" placeholder="Ingrese su edad"/>
                        </div>
                        <div className="Rgst_container-input">
                            <label for="Psw1">Password:</label>
                            <input id="password1" className="Rgst_CamposEntrada CampoEntradaPass" type="password" name="Psw1" placeholder="Password"/>
                        </div>
                        <div className="Rgst_container-input">
                            <label for="Psw1">Password:</label>
                            <input id="password2" className="Rgst_CamposEntrada CampoEntradaPass" type="password" name="Psw2" placeholder="Repit el Password" />
                        </div>
                        <div className="Rgst_DivBotonera">
                            <div className="Rgst_BotonAlta" tabindex="-1">
                               {/* El href lo manejo por el javascript en el evento "onClick" del  */}
                                <a className="Rgst_AHref_submit" href="">
                                    <button id="btnAlta" className="Rgst_Submit" type="button" > <ins>A</ins>lta</button> 
                                </a>
                            </div>
                            <div className="Rgst_BotonAlta" tabindex="-1">
                                <a className="Rgst_AHref_submit" href="../Login/login.html">
                                    <button id="btnCancelar" className="Rgst_Submit" type="button" ><ins>C</ins>ancelar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
    </div>
    )
}

export default Register
