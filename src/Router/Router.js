import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Products from "../pages/Products/Products"
import Lacteos from "../pages/Products/Lacteos"
import Verduras from "../pages/Products/Verduras"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element= {<Register />} />
                <Route path='/products' element= {<Products />} >
                    {/* Esta linea del 'index' es el children por defecto cuando arranca */}
                    {/* <Route index element= {<Login/>} />   */}
                    <Route path='lacteos' element= {<Lacteos/>} />
                    <Route path='verduras' element= {<Verduras />} />
                </Route>
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
