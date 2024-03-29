import './Products.css';
import './mediaQProd.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';


// //Definicion previas y de variables
let lsToken = "";
let lsEmail = "";
const baseURL = "https://back-sandbox.herokuapp.com/api";

// alert ("Componente Productos: 0- ejecución previa.")
console.log ("Componente Productos: 0- ejecución previa.")

const Products = () => {
    //dentro de procedimiento principal
    const navigate = useNavigate();

    //Defino estados necesarios
    const [arrayProductos, setArrayProductos]  = useState([]); //Siempre va a conservar todos los productos disponibles
    //El que se va a renderizar es el arrayProductosEncontrados
    const [arrayProductosEncontrados, setArrayProductosEncontrados]  = useState([]);
    const [arrayCarrito, setArrayCarrito]  = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [cantTotArticulos, setCantTotArticulos] = useState(0);
    const [cadenaBusqueda, setCadenaBusqueda] = useState('');


    // let arrProd = []
    //Creo el Arreglo para guardar los productos que va mandando al carrito, ya le asigno el estado 
    //     para que cuando cambie un estado y renderice el componente no vacie el arreglo
    //      --> FALTA: tengo que ver si no puedo eliminar este arreglo y usar solamente el estado
    let myCart = arrayCarrito
    let myCart1= []

     //Evento Click en el boton 'Volver' -- esto no se usa mas -- por ahora -- lo dejo por si lo agrego
    //  const onClickVolverHome = () => {
    //     // alert ("Entró en el onClick del Boton Volver Home.  Con el window.location.replace  --> recarga la pagina y con el navigate no.");
    //     // alert ("Ahora va a usar el window.location.replace  --> y mirá arriba -->  recarga la pagina!! ojo --> mejor usar el navigate('/home')")
    //     // window.location.replace("/home");  //deberi usar el navigate

    //     // alert ("Con el navigate NO recarga la pagina, mirá arriba....")
    //     console.log ("Con el navigate NO recarga la pagina, mirá arriba....")
    //     // navigate('/home');   //--> PERO NO ESTA ANDANDO CUANDO HABILITO LA SENENCIA DE DECLARACIÓN DEL NAVIGATE  
    //     navigate('/home') //pruebo esto con el # a ver si anda
    // }

    const handleCadenaBusquedaChange = (e) => {
        console.log(e.target.value);
        setCadenaBusqueda(e.target.value);
        let NewArrProdMatch = []
        //Filtro sobre el Arreglos original de todos los productos disponibles
        NewArrProdMatch = arrayProductos.filter((valor) => valor.name.toUpperCase().includes (e.target.value.toUpperCase() ));
        console.log("ENTRO AL HandleCadenaBusquedaChange.")
        console.log(NewArrProdMatch)
        //Seteo el estado sobre el Array de Productos Encontrados  --> que es el que se va a renderizar
        setArrayProductosEncontrados(NewArrProdMatch)
    } 

    // Procedimiento: Recupera los Productos del BackEnd
    const getProductos = async () => {
    try {
        //Sino tiene token
        if (!lsToken || lsToken === "undefined") {
            //voy a la ventana de Loguin
            alert ("¡¡No hay usuario Logueado!! \n\n Para utilizar esta Sección deberá Iniciar Seción.")
            //Vuelvo al Login para que se loguee
            //Falta usar el navigate y forzar que pase por ahi al menos 1 vez
            // window.location.replace("../../pages/Login/login.html"); // subo 2 niveles y estoy en el raiz
            navigate('/login')
        } else {
           
            // alert ("Ahora si va a recuperar los productos disponibles para la venta con el GET del Backend de Juli");
             console.log ("Ahora si va a recuperar los productos disponibles para la venta con el GET del Backend de Juli");
            // Recupero del BackEnd de 
            //'/products?limit=5&offset=0', {
            // const response = await fetch(`${baseURL}/products?limit=15&offset=6`, { // traigo los 15 primeros productos salteando los 6 primeros
            const response = await fetch(`${baseURL}/products?limit=15&offset=5`, {   //original: traigo los 9 productos, empezando del 5to 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${lsToken}`
                }
            });

            const json = await response.json();  //recupero lo que devuelve el Get del Fetch
           
            // consolo log para ver que mierda pasaba
            // --> no andaba el estado, hasta que comenté el alert
            // // console.log ("Consolog de Json del getProductos")
            // // console.log (json)
            // // console.log (json.data.data)
            // // arrProd = json.data.data
            // console.log (arrProd)
            // console.log ((arrProd.length))
            // setArrayProductos(arrProd)

            // alert("aca antes pasaba algo")
            //Es el arreglo original de todos los productos disponibles
            // setArrayProductos(json.data.data);
            console.log("Ahora muestro el arreglo del Estado --> arrayProductos: ");
            console.log(arrayProductos);
            console.log(json.data.data);
            setArrayProductos(json.data.data);
            //Que a esta altura es igual al que se va a renderizar
            setArrayProductosEncontrados(json.data.data)
            console.log("FINALMENTE muestro el arreglo del Estado --> arrayProductosEncontrados: ")
            console.log(arrayProductosEncontrados)

            
            // FALTA ver como lo meto en el estado 
            // console.log ("Consolog de Estado del getProductos")
            // setArrayProductos(json.data.data)  //esto va a hacer que se vuelva a renderizar el componenete
            // console.log (arrayProductos)
            // console.log ((arrayProductos.length))

            //  alert("Termino el fetch");

            //Va a Rendierizar los productos en el DOM
            // renderProductos(arrayProductos);
            console.log("Acá tendria que ir a renderizar los productos disponibles para la venta recien recuperados")
            }
        } catch( error ) {
           
            if (error == "TypeError: Cannot read properties of undefined (reading 'data')") {
                alert ("El Token ha expirado o no esta funcionando el BackEnd. \n¡Pruebe Loguearse nuevamente!")
                // window.location.replace("../Login")
                navigate('/login')
            }
            else {
                alert("Error devuelto por el 'getProductos': " + error);
            }
        }
    }

    // Procedimiento: Recupera los Productos del BackEnd
    const getCarritoUsuarioLoguedo = () => {
        
        try {
            console.log ("Aca está yendo ir a recuperar el carrito del usuario loguedo y acto seguido si hay halgo renderizarlo")
            //Recupero el Carrito del usuario por si hubiese tenido alguno
            //   2 Evaluo si tengo carrito para el usuario activo ----------------------- 
            //   alert ("longitu de myCart: " + myCart.length); 
            myCart1 = JSON.parse(localStorage.getItem("myCart" + lsEmail));
            //Si hay un carrito con cosas pre-existente para el usuario
            console.log ("myCart1 ------------------------> abajo");
            console.log (myCart1);
            if (myCart1 !== null) {
                //se lo asigno al carrito actua (myCart)
                myCart = myCart1;
                console.log ("myCart ------------------------> abajo");
                console.log(myCart);
            }

            //Si estoy arrancando con un carrito Pre-existente
            if (myCart) {
                //  alert ("va a ir a renderizar el carrito con " + myCart.lenght);
                // renderCartProducts();
                // showTotalAmount();
                setArrayCarrito(myCart); 
                CalculaTotalCarrito();

            } else {
                // alert ("el carrito arranca vacio ");
            }; 
        } 
        catch( error ) {
            alert("Error devuelto por el 'getCarritoUsuario': " + error);
        }
    }

    const CalculaTotalCarrito = () =>{
        console.log ("PASANDO POR CalcularTotalCarrito")
        let cantTotalArticulos = 0;
        let total = 0;
        myCart.forEach(cart => {
            console.log(cart);
            total += (cart.price * cart.quantity);
            cantTotalArticulos +=  cart.quantity;
        });
        setTotalCarrito(total)
        setCantTotArticulos(cantTotalArticulos)
    }

    const onClickComprar = (pObjProd, pIdProd) => {
        console.log("PASANDO POR el onClickComprar")
        const product = myCart.find(product => product.id === pIdProd); //y recupero el objeto del carrito de ese producto
        //si ese producto.id ya esta en el carrito?
        if(product) {
            console.log ("Ya esta el articulo en el carrito --> sumo 1")
            const index = myCart.indexOf(product);  //obtento el indice 
            product.quantity++;  //le sumo 1 a la cantidad del objeto Producto del carrito que acabo de buscar
            myCart[index] = product;  //le meto el elemento en nuevamente en ese indice con la cantidad nueva
            
            //y actualizo el estado del carrito
            setArrayCarrito(myCart)  //actualizo el estado            
            console.log (myCart);
        } else {
            console.log("NO esta en el carrito lo agrego")
            //si ese producto.id NO esta en el carrito
            const productToCart = {
                img: pObjProd.photo, 
                name: pObjProd.name,
                price: pObjProd.price,
                id: pIdProd,
                quantity:1
            };

            console.log ("No estaba el articulo en el carrito --> lo agrego")
            // agrego el producto nuevo en el carrito
            myCart.push(productToCart);
        }

        setArrayCarrito(myCart)  //actualizo el estado            
        console.log (myCart);
        // //Guardo el estado del Carrito (myCart) en el localStorage para el usuario actual
        //Guardo el estado del Carrito de usuario logueado (myCart) en el localStorage
        window.localStorage.setItem('myCart' + lsEmail, JSON.stringify(myCart));
        //     // ** para recuperarlo despues con:
        //     //       var data = JSON.parse(localStorage.getItem("myCart"));
        
        console.log(myCart)
        CalculaTotalCarrito(); /*Actualiza el esta totalCarrito --> renderiza esa parte de la pantalla  */
        setArrayCarrito(myCart);  //==> esto deberia hacer que renderice el componente de nuevo 
                                  // renderCartProducts();
    }

    const onClickAdd1 = (pIndex) => {
    // Funcion que le suma 1 al elemento del carrito, del arreglo pArrayCarrito en el indice pIndex
    /*pIndex es Indice dentro del arreglo del carrito en la posción que hay q sumar 1  */
    //  En teoria el parametro 'pArrayCarrito' pasa por Valor 
    //El producto siempre va a estar en el carrito: /*No haria falta buscar xque esto pasando el indice del arreglo al cual le tengo que sumar 1 */     
        console.log("PASANDO POR el Add'1' al articulo del carrito del cual apretó el boton")
        console.log(arrayCarrito)
        //Armo copia local del Estado del Arreglo del Carrito, xque no puedo laburar sobre el estado
        let laCarrito = arrayCarrito
        
        // const index = myCart.indexOf(product);  //obtento el indice 
        laCarrito[pIndex].quantity++
        // product.quantity++;  //le sumo 1 a la cantidad del objeto Producto del carrito que acabo de buscar
        // myCart[index] = product;  //le meto el elemento en nuevamente en ese indice con la cantidad nueva
        console.log(laCarrito);

        // //Guardo el estado del Carrito (myCart) en el localStorage para el usuario actual
        //Guardo el estado del Carrito de usuario logueado (myCart) en el localStorage
        window.localStorage.setItem('myCart' + lsEmail, JSON.stringify(laCarrito));
        //     // ** para recuperarlo despues con:
        //     //       var data = JSON.parse(localStorage.getItem("myCart"));

        //Actualizo el estado del carrito
        setArrayCarrito(laCarrito)   //==> esto deberia hacer que renderice el componente de nuevo 
                                         // renderCartProducts();        
        CalculaTotalCarrito(); /*Actualiza el estado de totalCarrit --> renderiza de nuevo el componente mostrando ese estado */
    }

    const onClickSubtract1 = (pIndex) => {
    // Funcion que le resta 1 al elemento del carrito, del arreglo pArrayCarrito en el indice pIndex
    //pIndex es Indice dentro del arreglo del carrito en la posción que hay q Restar 1  */
    //El producto.siempre esta en el carrito     
        console.log("PASANDO POR el Restar'1' al articulo del carrito del cual apretó el boton, el indice es: --> " + pIndex)
        /*No haria falta buscar xque esto pasando el indice del arreglo al cual le tengo que sumar 1 */
        /*const product = myCart.find(product => product.id === pIdProd);*/  //y recupero el objeto del carrito de ese producto
        // const index = myCart.indexOf(product);  //obtento el indice 
        let laCarrito = arrayCarrito
        let laCarritoTmp = arrayCarrito

        //Validacion Previa para que no se rompa: xque no esta actualizando la pantalla cuando elimino 1 elemento del arreglo con el splice
        if (pIndex <= arrayCarrito.length-1) {
            //Armo copia local del Estado del Arreglo del Carrito, xque no puedo laburar sobre el estado
            
            
            if (laCarrito[pIndex].quantity >= 1) {
                laCarrito[pIndex].quantity-- }
            else {
                // alert ("no se puede restar")
                // .splice(indiceDesde, cuantosBorrar, quéAgregar)
                laCarrito.splice((pIndex), 1)
                console.log(laCarrito)

            }
            // product.quantity++;  //le sumo 1 a la cantidad del objeto Producto del carrito que acabo de buscar
            // myCart[index] = product;  //le meto el elemento en nuevamente en ese indice con la cantidad nueva
            console.log (laCarrito);

            // //Guardo el estado del Carrito (myCart) en el localStorage para el usuario actual
            //Guardo el estado del Carrito de usuario logueado (myCart) en el localStorage
            window.localStorage.setItem('myCart' + lsEmail, JSON.stringify(laCarrito));
            //     // ** para recuperarlo despues con:
            //     //       var data = JSON.parse(localStorage.getItem("myCart"));

            //Actualizo el estado del carrito
            setArrayCarrito(laCarrito)   //==> esto deberia hacer que renderice el componente de nuevo 
                                                // renderCartProducts();        
            CalculaTotalCarrito(); /*Actualiza el estado de totalCarrit --> renderiza de nuevo el componente mostrando ese estado */
        
        } else {
            console.log ("Pasando por anomalia quieriendo borrar 1 elemento por fuera del arreglo");
            setArrayCarrito(laCarrito) 
        }
        
    }

    const onClickFinalizarCompra = () =>  {
        //El cliente esta finalizando la compra
       
        alert("¡¡ Gracias '" + lsEmail + "' por comprar en KIWI !! \nEl Total de su compra es:     $ " + totalCarrito + ". \nCon un total de  '" + cantTotArticulos + "'  artículos." );

        myCart = [];
        setArrayCarrito(myCart);
        CalculaTotalCarrito();
       
         //blanqueo el localStorage del carrito
        //  localStorage.setItem("myCart" + lsEmailUsLogueado, myCart);
         localStorage.removeItem("myCart" + lsEmail, myCart);
    }

    //Precondición siempre que entra a este componente hay un usuario logueado con Token activo.
    //    Cosa que se valida en el NavBar.js (sino tiene Token, usuario logueado lo patea al loguin)
    useEffect(() => {
         //recupero valores del storage primero
        lsEmail = localStorage.getItem('emailUsuario');
        lsToken = localStorage.getItem('token');  

        //Cargo los Prodcutos Disponibles para su compra
        getProductos();
        getCarritoUsuarioLoguedo();

    }, []); 
    // con el ", [])": --> se va a ejecutar 1 sola vez al principio



    return (

    <div className="Prd__Portada">
        <div className="Prd__Card">
            {/* <!-- <div className="Prd__ImagenUsuario">
                <img src="/Imagenes/LogoAlternativo.jpg" alt="Kiwi Mercado">
            </div> --> */}
            <div className="Prd__CntNuevaCuenta">
                <p>Productos Disponibles:</p>
                
                <div className="Prd__Conteiner_Busqueda">
                    <label for="CadenaBusqueda">Busqueda: </label>
                        <input id = "CadenaBusqueda" className="Prd__InputBusquda" value={cadenaBusqueda} onChange={handleCadenaBusquedaChange} placeholder="Ingrese un producto o cadena a buscar" autoFocus enabled/>
                </div>

                {/* <!-- Debio ser un form pero como el action aun no se JS: no funciona los botones para volver: entonces pongo un div--> */}
                <section className="Prd__listProducts" id="listProducts">
                    <div className="Prd__principalWrapper">
                        {/* <!-- <h2>Acá va la lista de los Pédis</h2> --> */}
                        <ul id='products-container'>
                            {/* {alert("PASO POR ACA")} */}
                            {console.log("ACA Viene a Renderizar el arrProd")}
                            {console.log("Longitud del ESTADO arrayProductosEncontrados: --> " + arrayProductosEncontrados.length)}
                            {/* Mapeo los productos en 1 card para cada uno */}
                            {arrayProductosEncontrados.map( ( p , i)  => 
                               
                                    <li key={i}>
                                        <div>
                                            {/* <img src="./assets/img/squirtle.png" alt="Squirtle"/> */}
                                            <img width="80px" height="80px" src={p.photo} alt="Squirtle"/>
                                        </div>
                                        <span>{p.name}</span>
                                        <span className="Prd__Dsc">{p.description}</span>
                                        <span>$ {p.price}</span>
                                        <button className='Prd__BtnComprar' onClick={() => onClickComprar(p, p.id)} >Comprar</button>
                                    </li> 
                              
                            
                            )}
                            {/* FIN Mapeo los productos en 1 card para cada uno */}
                        </ul>

                        {/*                                                 
                        <ul id='products-container'>
                            <li>
                                <div>
                                    <img src="./assets/img/squirtle.png" alt="Squirtle"/>
                                </div>
                                <span>Limon Verde</span>
                                <span className="Prd__Dsc">Descripción del Limón .</span>
                                <span>758$</span>
                                <button>Comprar</button>
                            </li>
                        </ul> */}
                    </div>
                </section>

                {/* SECCION DEL CARRITO: LO QUE ESTA COMPRANDO EL USUARIO LOGUEADO */}
                <section className="Prd__cartList" id="cartList">
                    <div className="Prd__principalWrapper">
                        <h2>Productos que están en el Carrito:</h2>
                        {/* <!-- <p>
                            Estaría piola en el navbar, tipo sidebar se abra... <br>
                            Pero como dicen las malas lenguas: "Mientras funcione"
                        </p> --> */}
                         {/* <!-- Aca van a ir los renderizados --> */}       
                        <div className="Prd__cart-wrapper">
                            <div id='cart-list'>
                            {console.log("ACA Viene a Renderizar el arrayCarrito")}
                            {console.log("Longitud del ESTADO arrayCarrito: --> " + arrayCarrito.length)}
                                {arrayCarrito.map( (p, i) => 
                                    <div key={i} className="Prd__cart-item">
                                        <div className="Prd__cart-item-content">
                                            <div>
                                                <img className="Prd__Img-Prod-Carri" 
                                                     src={p.img} alt={p.name}/>
                                            </div>
                                            <span className="Prd__Cantidad"> {`x ${p.quantity} u.`}</span>
                                            <button className='Prd__BtnAdd' onClick={() => onClickAdd1(i)}>+</button>
                                            <button className='Prd__BtnSubtrac' onClick={() => onClickSubtract1(i)}>-</button>
                                            <span>- {p.name}  - ($ {p.price})</span>
                                        </div>
                                        <span>$ {p.price * p.quantity}</span>
                                    </div>
                                )}  
                            </div>   
                            {/* -- Estos de abjo deberian estar comentados -- */}
                             {/* <!-- <div className="Prd__cart-item">
                                <div className="Prd__cart-item-content">
                                    <div className="Prd__item-img">
                                        <img src="./assets/img/squirtle.png" alt="Squirtle">
                                    </div>
                                    <span>- Coso de vamo a calmarno</span>
                                </div>
                                <span>$758</span>
                            </div> --> */}
                            <div className="Prd__total-items">
                                <span>
                                    <strong>Total:</strong> <b id='totalAmount'>$ {totalCarrito}</b>
                                </span>
                            </div>
                            <button id='btnFinalizarCompra' 
                                    onClick={() => onClickFinalizarCompra()} >Finalizar compra</button>
                        </div>
                    </div>
                </section>

                    <div className="Prd__DivBotonera">
                        <div className="Prd__BotonAlta">
                            <a className="Prd__AHref_Submit" href="../../index.html"><button className="Prd__Submit" type="submit" > <ins>V</ins>olver</button></a>
                        </div>
                        {/* <div className="Prd__BotonAlta">
                            <a className="Prd__AHref_submit" href="../../index.html"><button className="Prd__Submit" type="submit" ><ins>C</ins>ancelar</button></a>
                        </div> */}
                    </div>
            </div>
        </div>    
    </div>
    // </div>    



    )
}

export default Products
