import { useLocation } from "react-router-dom"
import { CarritoProducts } from "./CarritoProducts";
import { createOrder } from "../service/createOrder";
import { useState } from "react";
import { Button } from "bootstrap";

export const Carrito = ()=>{

    const location = useLocation();
    const products= location.state?.products;
    const [productsSelected,setProductsSelected]=useState()

    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const [nCel,setNCel]=useState();


    const handlerComprar = (e)=>{
      e.preventDefault()
      const products = {
        email:email,
        address:address,
        nCel:nCel,
        products:productsSelected
      }
      console.log(products);
      createOrder(products);
    }

    return (<>

    
        <table   table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
       <CarritoProducts products={products} setProductsSelected={setProductsSelected}/>    
        </tbody>
        </table>
        
        <form onSubmit={handlerComprar}>
          <div className="mb-3">
              <label  className="form-label">Email<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="email" name="email" required
              onChange={(e)=>setEmail(e.target.value)}/>
              <div className="invalid-feedback">
                  El campo email es obligatorio.
              </div>
          </div>

          <div className="mb-3">
              <label  className="form-label">Direccion<span className="text-danger">*</span></label>
              <input type="Address" className="form-control" id="Address" name="Address" required
              onChange={(e)=>setAddress(e.target.value)}/>
              <div className="invalid-feedback">
                  El direccion es obligatoria
              </div>
          </div>

          <div className="mb-3">
              <label  className="form-label">nCel <span className="text-danger">*</span></label>
              <input type="number" className="form-control" id="nCel" name="nCel" required step="0.01" min="0.01"
              onChange={(e)=>setNCel(e.target.value)}/>
              <div className="invalid-feedback">
                  Numero de celular
              </div>
          </div>

          <button type="submit" className="btn btn-primary">Generar compra</button>


        </form>
    
    </>)
}