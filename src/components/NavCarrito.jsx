import { Link } from "react-router-dom"
import { CarIcon } from "./CarIcon"

export const NavCarrito = ({productsSelected})=>{
    return (<>
    
        <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{marginBottom:'20px' }}>
          <CarIcon productsSelected={productsSelected}/>
        </nav>
    
    </>)
}