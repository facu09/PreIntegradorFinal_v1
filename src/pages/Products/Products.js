import { Link, Outlet, useNavigate } from "react-router-dom"
import './Products.css'

alert ("Componente Productos: 0- ejecución previa.")

const Products = () => {
    //dentro de procedimiento principal
    const navigate = useNavigate();

     //Evento Click en el 'lblUsuario'
     const onClickVolverHome = () => {
        // alert ("Entró en el onClick del Boton Volver Home.  Con el window.location.replace  --> recarga la pagina y con el navigate no.");
        // alert ("Ahora va a usar el window.location.replace  --> y mirá arriba -->  recarga la pagina!! ojo --> mejor usar el navigate('/home')")
        // window.location.replace("/home");  //deberi usar el navigate

        alert ("Con el navigate NO recarga la pagina, mirá arriba....")
        // navigate('/home');   //--> PERO NO ESTA ANDANDO CUANDO HABILITO LA SENENCIA DE DECLARACIÓN DEL NAVIGATE  
        navigate('/home') //pruebo esto con el # a ver si anda
    }

    return (
        <div className= 'MainDiv'>
            <h1>Soy la Page de Products!!!</h1>
            <h2>Aca van a ir todos los productos disponibles para comprar</h2>

            {/* <button onClick={() => navigate('/home')} >Volver a Home</button> */}
            <button onClick={onClickVolverHome} >Volver a Home</button>


            <Link to='/products/lacteos'>Ir a Lacteos</Link>
            <Link to= '/products/verduras'>Ir a Verduras</Link>
            <Link to= '/products'>Limpiar</Link>
            <div style={{border:'2px solid red'}} className='TipoProdConteiner' >
                <h2 style={{fontSize:'40px'}}>Productos Seleccionados:</h2>
                <Outlet/>
            </div>
        </div>
    )
}

export default Products
