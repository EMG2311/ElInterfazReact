import { useState } from "react";

export const CarritoProducts = ({ products,setProductsSelected }) => {
    const [productsState, setProductsState] = useState(products || []);
    setProductsSelected(productsState);
    const onDeleteProduct = (name) => {
      const updatedProducts = productsState
        .filter((p) => !(p.name === name && p.quantity === 1)) // Filtrar productos con quantity === 1
        .map((p) => {
          if (p.name === name) {
            return { ...p, quantity: p.quantity - 1 }; // Devolver un nuevo objeto con quantity reducido
          }
          return p; // Devolver los demás productos sin cambios
        });
  
      setProductsState(updatedProducts);
      setProductsSelected(updatedProducts) // Actualizar el estado con el nuevo arreglo
    };
  
    return (
      <>
        {productsState.length > 0 ? (
          productsState.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{"$"+(product.price*product.quantity)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(product.name)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No hay productos en el carrito.</td>
          </tr>
        )}
      </>
    );
  };