import { Navbar } from "../components/Navbar"
import {Routes,Route} from "react-router-dom"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Products } from "../components/ProductsDashboard"
import { SingleProductList } from "../components/SingleProduct"
import { Clicked } from "../components/Clicked"

export const MainRoutes = ()=>{
    return(
        <>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>} />
           <Route path="/products" element={<Products/>}/>
           <Route path="/products/:id" element={<Clicked/>}/>
        </Routes>
        </>
    )
}