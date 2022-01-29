import { Link, Outlet, useNavigate } from "react-router-dom"
import './Products.css'

const Products = () => {
    //dentro de procedimiento principal
    const navigate = useNavigate();

    return (
        <div class = 'MainDiv'>
            <h1>Soy la Page de Products!!!</h1>
            <h2>Aca van a ir todos los productos disponibles para comprar</h2>

            <button onClick={() => navigate('/home')} >Volver a Home</button>

            <Link to='/products/lacteos'>Ir a Lacteos</Link>
            <Link to= '/products/verduras'>Ir a Verduras</Link>
            <Link to= '/products'>Limpiar</Link>
            <div style={{border:'2px solid red'}} class='TipoProdConteiner' >
                <h2 style={{fontSize:'40px'}}>Productos Seleccionados:</h2>
                <Outlet/>
            </div>
        </div>
    )
}

export default Products
