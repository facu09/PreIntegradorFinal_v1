import './NavBar.css';  // vinculo estilos
import './NavMedQ.css'  // estilos en cascadas propios
import '../../fontawesome/fontawesome-free-5.15.3-web/css/all.css'; //para poder usar estilos de Fontawesome

import logoKiwi from '../../Imagenes/LogoKiwi.jpg';

import { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom"

// //Referencio a los elementos del DOM que voy a necesitar
// const btnLogin = document.getElementById("btnLogin");
// // const email = document.querySelector('#email'); //Otra forma de referenciar los Elementos del html
// const lblUsuario = document.getElementById("lblUsuario");

// ME LO LLEVO PARA LA HOME :)
// alert ("¡¡ Bienvenido a 'Kiwi Tiendas' !! \n Usted podrá: \n1- Iniciar sesión.\n2- Registrarse. \n3- Comprar (Sección 'Productos' - requerie inicio de sesiòn). \n4- Agregar productos nuevos a la tienda (desde 'Sección Productos'). \n5- La tienda conservará el carrito con su posible compra para cada usuario mientras no cierren el navegador, pudiendo navegar por el sitio e incluso cambiar de usuario sin perder el mismo. \n** Este aviso esta puesto para que pueda ser evaluada toda la funcionalidad");

// const [lsLblUsMostrar, setlsLblUsMostrar] = useState('');
// const [lsLblBotonLogInOut, setlsLblBotonLogInOut] = useState('');

//Definicion de variables
// let lsToken = "";
let lsEmail = "facu";
//recupero el token: Si esta logueado el usuario --> va a estar guardado en el localStorage
let lsToken = localStorage.getItem('token');  // ahora es string token1
// alert ("Hay token " + lsToken)
let lsLblUsMostrar = ""
let lsLblBotonLogInOut = ""
// setlsLblUsMostrar("")
// setlsLblBotonLogInOut("")


//Si tengo Token (es que esta logueado el usuario)
if ((lsToken) && !(lsToken === 'undefined')) {
    //comento alert para ver si recarga pagina
    //  alert ("Paso por el Tiene Token: " + lsToken);
    
     // --> Pongo el mail del usuario y el boton de 'Logout'
    lsEmail = localStorage.getItem('emailUsuario');
    //comento alert para ver si recarga pagina
    // alert ("email recien recuperado es: " + lsEmail);

    if (lsEmail) {
        //comento alert para ver si recarga pagina
        // alert ("Paso por el Tiene Token Y tiene email: ");
       
        // FALTA VER COMO LO PONGO   
        // lblUsuario.innerHTML = "(" + lsEmail  + ")";
        // btnLogin.innerHTML = "Logout";
        lsLblUsMostrar = "(" + lsEmail + ")"
        lsLblBotonLogInOut = "Logout"   //seteo el botón 'Login/Logout' para que se deslogue
        // setlsLblUsMostrar("(" + lsEmail + ")")
        // setlsLblBotonLogInOut( "Logout" )
    
    }  else {
        //comento alert para ver si recarga pagina
        // alert("Paso por el camino: Tiene Token Y No tiene mail es: es null");
        lsLblUsMostrar = "( - )"
        lsLblBotonLogInOut = "Login" //cambio botón 'Login/Logout' para que se logue
        // setlsLblUsMostrar( "( - )")
        // setlsLblBotonLogInOut( "Login" )

        //IMPORTANTE APRENDIZAJE: // No se usa el .innerHTML  --> 
        //  se usa en el return del HTML las {} :  
        //        <li class="ElementoNav" id="lblUsuario" font-size= "0.70em">{lsLblUsMostrar}</li>
        // El innerHTML no muestra nada rompe el html (no se porque)
        // lblUsuario.innerHTML = "(-)";
        // btnLogin.innerHTML = "Login";
    }
  
} else {
    //Sino está logueado saco el usuario y pongo botón 'Login'
    //comento alert para ver si recarga pagina
    // alert("Paso por el camino: No tiene token");
    lsLblUsMostrar = "( - )"
    lsLblBotonLogInOut = "Login" //cambio botón 'Login/Logout' para que se logue
    // setlsLblUsMostrar( "( - )")
    // setlsLblBotonLogInOut( "Login" )
   
    //IMPORTANTE APRENDIZAJE: // No se usa el .innerHTML  --> 
    //  se usa en el return del HTML las {} :  
    //        <li class="ElementoNav" id="lblUsuario" font-size= "0.70em">{lsLblUsMostrar}</li>
    // El innerHTML no muestra nada rompe el html (no se porque)
    // lblUsuario.innerHTML = "(-)";
    // btnLogin.innerHTML = "Login";
}




// //FALTA VER COMO METER LOS BOTONES, USEEFECT?? O ALGO???
// //  FALTA DOCUMENTAR LO QUE HICE
// //Evento Click en el 'lblUsuario'
// const onClickLblUsuario = () => {
//     alert ("entro en el onClick del Lbl de Usuario.");
//     window.location.replace("./pages/User/User.html");  
// }

// btnLogin.addEventListener('click', onClickLoginLogout );  //No hace falta mas: --> lo meto adentro del boton la definición del evento
// lblUsuario.addEventListener('click', onClickLblUsuario);


//-------------------------------- Funcion que devuelve el DIV del componente -------------------------//
const NavBar = () => {

    // alert('antes del navigate');
    // // dentro de procedimiento principal
    // const navigate = useNavigate();

    // alert('paso el navigate');

    // //Evento Click en 'Login/Logout'
    // const onClickLoginLogout = () => {
    //     alert("Entro al onClickLoginLogout");
    //     //   alert ("el inner del btnlogin es " + btnLogin.innerHTML );
    //     //Si el estado del boton es 'Login'
    //     if (btnLogin.innerHTML === "Login") {
    //         alert ("Entro al Login ehhhh");
            
    //         // falta ver tema de ruteos en React que es distinto que html vanilla
    //         //Aca habria que ver el tema de las rutas // VIDEO-CLASE de Rute y New Rute --> 14/Oct/21
    //         //window.location.replace("./pages/Login/login.html")
    //         // Window.location.replace("../../pages/Login/login.html")  // ../subo 1 nivel estoy en Componentes, luego subo ../ otro nivel estoy en src

    //         //Ahora con el Route tan solo:
    //         navigate('/login');

    //     } else {
    //         //Esta del botón --> 'Logout'
    //         alert ("Entro al Logout ueeee");
    //         //Deslogueo al usuario 
    //         localStorage.setItem('token', undefined);
    //         localStorage.setItem('emailUsuario', "");
    //         //Seteo variables a ser mostradas en el HTML - Front End
    //         lsLblUsMostrar = "( - )"
    //         lsLblBotonLogInOut = "Login" //cambio botón 'Login/Logout' para que se logue
    //         // IMPORTANTE: Esto asi no anda --> deberia usar un UseEffect  --> repasa VIDEO-CLASE --> 
    //         // lblUsuario.innerHTML = ""
    //         // btnLogin.innerHTML = "Login";
    //     }
    // }

    return (
        <div>
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
                        <li class="ElementoNav" id="lblUsuario" font-size= "0.70em">{lsLblUsMostrar}</li>

                        {/* <!-- <li><a href="login.html">
                        <button id="btnLogin" class="BtnLogin" >Login</button></a></li> --> */}
                        {/* <!-- El login lo paso a manejar por el evento click del boton dentro del javascript 'index.js' --> */}
                        <li><button id="btnLogin" class="BtnLogin" > {lsLblBotonLogInOut}</button></li> 
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
