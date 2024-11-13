import { useEffect, useState } from 'react'

import {ProductTableView} from './components/productTableView'

import { FormProduct } from './components/formProduct'
import { Route, BrowserRouter,Link, Routes } from 'react-router-dom'
import { deleteProduct } from './service/deleteProduct';
import { viewProduct } from './service/submitFormProduct';
import { FormProductUpdate } from './components/formProductUpdate';
function App() {

  const [openDialog,setOpenDialog]=useState(false);
  const [products,setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [error,setError] = useState(null);

useEffect(() => {
   viewProduct(setProducts,setError)
  }, []);

  useEffect(() => {
    if (openDialog) {
      const result = window.confirm("¿Desea confirmar la operación?");
      setOpenDialog(false);

      if (result && productToDelete) {
        deleteProduct(productToDelete,products,setProducts); 
      }
    }
  }, [openDialog, productToDelete]);

  // Función para manejar la eliminación del producto
  const changeDialog = (name) => {
    setProductToDelete(name); // Almacena el nombre del producto que se desea eliminar
    setOpenDialog(true); // Abre el cuadro de diálogo de confirmación
  };



  return (
    <>
      <BrowserRouter>
          <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    
            <Link className='navbar-brand' to="/">Mostrar productos</Link>
            <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
              <Link to="/crearProducto" className="btn btn-primary" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '5px 10px' }}>
                  + Agregar
              </Link>
          </div>
          </nav>

        <Routes>
          <Route path='/crearProducto' element={<FormProduct />} />
          <Route path='/updateProduct' element={<FormProductUpdate />} />
          <Route path='/' element={<ProductTableView products={products}  changeDialog={changeDialog}/>} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App
