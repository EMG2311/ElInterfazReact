import { useEffect } from "react";
import { useState } from "react"
import { viewProduct } from "../service/submitFormProduct";
import { NavCarrito } from "./NavCarrito";

export const ListCarrito = ()=>{
const [products, setProducts]= useState([]);
const [error,setError] = useState(null);
const [productsSelected,setProductsSelected] = useState([]);


useEffect(()=>{
    viewProduct(setProducts, setError);
},[]);

const AddProductHandler = (nombre)=>{

    const existingProductIndex = productsSelected.findIndex(
        (item) => item.name === nombre
      );
    if (existingProductIndex !== -1) {
    // Si el producto existe, sumamos la cantidad
    const updatedProducts = [...productsSelected];
    updatedProducts[existingProductIndex].quantity += 1;
    setProductsSelected(updatedProducts);
    } else {
    // Si el producto no existe, lo agregamos con cantidad 1
    const newProduct = { name: nombre, quantity: 1 };
    setProductsSelected([...productsSelected, newProduct]);
    }
    console.log(productsSelected);
}

return (

    <>
    <NavCarrito/>
    <div className="row row-cols-1 row-cols-md-4 g-2">
    {products.map((product)=>{
        return(
        <div className="col" key={product.name}>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Disponibles: {product.stock}</p>
            <button onClick={()=> AddProductHandler(product.name)} className="btn btn-primary">Agregar</button>
        </div>
        </div>
        </div>
    
    )
    })}
    </div>
    
    </>
)
}