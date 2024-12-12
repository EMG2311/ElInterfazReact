import { useEffect } from "react";
import { useState } from "react"
import { viewProduct } from "../service/submitFormProduct";
import { NavCarrito } from "./NavCarrito";
import { useNavigate } from "react-router-dom";

export const ListCarrito = ()=>{
const [products, setProducts]= useState([]);
const [error,setError] = useState(null);
const [productsSelected,setProductsSelected] = useState([]);

useEffect(()=>{
    viewProduct(setProducts, setError);
},[]);

const AddProductHandler = (nombre, price)=>{

    const existingProductIndex = productsSelected.findIndex(
        (item) => item.name === nombre
      );
    if (existingProductIndex !== -1) {
    const updatedProducts = [...productsSelected];
    updatedProducts[existingProductIndex].quantity += 1;
    setProductsSelected(updatedProducts);
    } else {
    const newProduct = { name: nombre, quantity: 1,price:price };
    setProductsSelected([...productsSelected, newProduct]);
    }
    console.log(productsSelected);
}

return (

    <>
    <NavCarrito productsSelected={productsSelected}/>
    <div className="row row-cols-1 row-cols-md-4 g-2">
    {products.map((product)=>{
        return(
        <div className="col" key={product.name}>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Disponibles: {product.stock}</p>
            <button onClick={()=> AddProductHandler(product.name,product.price)} className="btn btn-primary">Agregar</button>
        </div>
        </div>
        </div>
    
    )
    })}
    </div>
    
    </>
)
}