
import './NavBar.css';  // vinculo estilos
import './NavMedQ.css'  // estilos en cascadas propios
import '../../fontawesome/fontawesome-free-5.15.3-web/css/all.css'; //para poder usar estilos de Fontawesome

import logoKiwi from '../../Imagenes/LogoKiwi.jpg';

import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'



// ME LO LLEVO PARA LA HOME :)
// alert ("¡¡ Bienvenido a 'Kiwi Tiendas' !! \n Usted podrá: \n1- Iniciar sesión.\n2- Registrarse. \n3- Comprar (Sección 'Productos' - requerie inicio de sesiòn). \n4- Agregar productos nuevos a la tienda (desde 'Sección Productos'). \n5- La tienda conservará el carrito con su posible compra para cada usuario mientras no cierren el navegador, pudiendo navegar por el sitio e incluso cambiar de usuario sin perder el mismo. \n** Este aviso esta puesto para que pueda ser evaluada toda la funcionalidad");

// //Definicion de variables
let lsToken = "";
let lsEmail = "facu";
let lsLblUsMostrar = ""
let lsLblBotonLogInOut = ""


//-------------------------------- Funcion que devuelve el DIV del componente -------------------------//
const NavBar = () => {

    // const [lsLblUsMostrar, setLsLblUsMostrar] = useState('');
    // const [lsLblBotonLogInOut, setLsLblBotonLogInOut] = useState('');
    const [usMostrar, setUsMostrar] = useState("( - )");
    const [btnLogInOut, setBtnLogInOut] = useState("Login");

    // setUsMostrar('');
    // setBtnLogInOut('');

    // alert('antes de DELCLARAR navigate'); 
    // dentro de procedimiento principal TIENE QUE ESTAR LA DECLARACIÓN DEL NAVIGATE
   
    // ATENCIÓN CUANDO PONGO ESTA SENTENCIA DE DECLARACIÓN SE ROMPE LA RENDERIZACION DE TODO
    const navigate = useNavigate()
    // alert('paso LA DECLARACIÓN DE NAVIGATE navigate');

    //recupero el token (si esta bien logueado lo traerá)
    lsToken = localStorage.getItem('token');  

    //Si tengo Token (es que esta logueado el usuario)
    if ((lsToken) && !(lsToken === 'undefined')) {
        alert("Tiene token")
            // --> Pongo el mail del usuario y el boton de 'Logout'
        lsEmail = localStorage.getItem('emailUsuario');

        if (lsEmail) {

            lsLblUsMostrar = "(" + lsEmail + ")";
            lsLblBotonLogInOut = "Logout";  //seteo el botón 'Login/Logout' para que se deslogue
            setUsMostrar(lsLblUsMostrar);
            setBtnLogInOut(lsLblBotonLogInOut);

            // setLsLblUsMostrar("(" + lsEmail + ")")
            // setLsLblBotonLogInOut("Logout")
        }  else {
            lsLblUsMostrar = "( - )"
            lsLblBotonLogInOut = "Login" //cambio botón 'Login/Logout' para que se logue
            setUsMostrar(lsLblUsMostrar);
            setBtnLogInOut(lsLblBotonLogInOut);

            //IMPORTANTE APRENDIZAJE: // No se usa el .innerHTML  --> 
            //  se usa en el return del HTML las {} :  
            //        <li class="ElementoNav" id="lblUsuario" font-size= "0.70em">{lsLblUsMostrar}</li>
            // El innerHTML no muestra nada rompe el html (no se porque)
            // lblUsuario.innerHTML = "(-)";
            // btnLogin.innerHTML = "Login";
        }
        
    } else {
        alert ("No tiene token, los datos actuales del lsLblUsMostrar es: " + lsLblUsMostrar + "y el estado usMostrar es: " + usMostrar )
        //Sino está logueado saco el usuario y pongo botón 'Login'
        if ( usMostrar !== "( - )" ) {
            lsLblUsMostrar = "( - )";
            lsLblBotonLogInOut = "Login";
            setUsMostrar(lsLblUsMostrar);
            setBtnLogInOut(lsLblBotonLogInOut);
        }
    }

    //Evento Click en el 'lblUsuario'
    const onClickLblUsuario = () => {
        alert ("entro en el onClick del Lbl de Usuario: como no uso el Navigate, sino el window.location.replace --> recarga la pagina.");
        window.location.replace("/User");  //deberi usar el navigate

         // navigate('/user');   //--> PERO NO ESTA ANDANDO CUANDO HABILITO LA SENENCIA DE DECLARACIÓN DEL NAVIGATE  
    }

    //Evento Click en 'Login/Logout'
    const onClickLoginLogout = () => {
        alert("Entro al onClickLoginLogout");
         if (lsLblBotonLogInOut === 'Login') {
             alert ("Entro al Login ehhhh PERO COMO USO EL Window.location.replace --> recarga lapagina --> mira arriba...");
            
            //Aca habria que ver el tema de las rutas // VIDEO-CLASE de Rute y New Rute --> 14/Oct/21
            //window.location.replace("./pages/Login/login.html")
            // Window.location.replace("../../pages/Login/login.html")  // ../subo 1 nivel estoy en Componentes, luego subo ../ otro nivel estoy en src
            // //Ahora con el Route tan solo:
            // navigate('/login');   --> PERO NO ANDA, CUANDO DECLARO ARRIBA const navigate = useNavigate(); ==>
            //                              ==> se rompe y no renderiza queda en pantalla verde

            //AHORA SI USO el Window.location.replace funciona
            window.location.replace("./login")

        } else {
            //Esta del botón --> 'Logout'
            alert ("Entro al Logout ueeee");
            //Deslogueo al usuario 
            localStorage.setItem('token', undefined);
            localStorage.setItem('emailUsuario', "");
            //Seteo variables a ser mostradas en el HTML - Front End
            lsLblUsMostrar = "( - )"
            lsLblBotonLogInOut = "Login" //cambio botón 'Login/Logout' para que se logue
            // IMPORTANTE: Esto asi no anda --> deberia usar un UseEffect  --> repasa VIDEO-CLASE --> 
            // lblUsuario.innerHTML = ""
            // btnLogin.innerHTML = "Login";
        }
    }

    return (
        <div stye={{ marginTop:"0%", padding: "0px" }}>
            <header>
            <div class="encabezado">
                <div class="logo">
                    <a class="ARefLogo" href="/home#Inicio">
                           {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <img class="ImagenLogo" src={logoKiwi} alt="LogoKiwi"/>    
                        {/* <img class="ImagenLogo" src={'../../Imagenes/LogoKiwi.jpg'} alt="LogoKiwi"/>     */}
                    </a>
                    <div class="LogoOpacidad"></div>
                </div>
                
                <nav class="NavBar">
                    <ul class="ListaElementos">
                        <li class="ElementoNav">
                            <a href="/home#Inicio">Inicio</a>
                                {/* redireccionar de esta manera hacer recargar la pagina */}
                                {/* FALTAR AVIERGUAR SI ES ASI */}
                        </li>
                        <li class="ElementoNav">
                            <a href="/home#QuienesSomos" class="LiQuienesSomos">Q</a>
                        </li>
                        <li class="ElementoNav"> 
                            {/* <!-- <a href="#Productos" class="LiProdcutos">Prod</a> --> */}
                            <a href="/products" class="LiProdcutos">Prod</a>
                        </li>
                        <li class="ElementoNav">
                            <a href="/home#Pedidos" class="liPedidos">Ped</a>
                        </li>
                        <li class="ElementoNav"><a href="/home#Contacto">Contacto</a></li>
                        {/* <li class="ElementoNav" id="lblUsuario" onClick={onClickLblUsuario}>{usMostrar}</li> */}
                        <li class="ElementoNav" id="lblUsuario" onClick={onClickLblUsuario}>{usMostrar}</li>
                        {/* <li class="ElementoNav" id="lblUsuario" font-size= "0.70em">{lsLblUsMostrar}</li> */}

                        {/* <!-- <li><a href="login.html">
                        <button id="btnLogin" class="BtnLogin" >Login</button></a></li> --> */}
                        {/* <!-- El login lo paso a manejar por el evento click del boton dentro del javascript 'index.js' --> */}
                        <li><button id="btnLogin" class="BtnLogin" onClick={onClickLoginLogout}> {btnLogInOut}</button></li> 
                        {/* <li><button id="btnLogin" class="BtnLogin" onClick={onClickLoginLogout}> {btnLogInOut}</button></li>  */}
                        {/* onClick={() => navigate('/home')} */}
                    </ul>
                </nav> 
            </div>
            {/* <div class="Portada" id="Inicio">
                <div class="portada-opacidad"></div> */}
                    {/* <h1 class="TituloPortada1" >¡¡Kiwi tu mejor helado!!</h1> 
                    <h1 class="TituloPortada2">NOSOTROS TE LO LLEVAMOS</h1> */}
            {/* </div> */}
            </header>
        </div>
    )
}


export default NavBar
