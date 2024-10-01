import { useEffect, useState } from 'react'

import {ProductTableView} from './components/productTableView'

import { FormProduct } from './components/formProduct'
import { Route, BrowserRouter,Link, Routes } from 'react-router-dom'
import { deleteProduct } from './service/deleteProduct';
function App() {

  const [openDialog,setOpenDialog]=useState(false);
  const [products,setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/product/view")
    .then(response => response.json())
    .then(data=>setProducts(data))
    .catch(error=>setError(error))
  }, []);

  useEffect(() => {
    if (openDialog) {
      const result = window.confirm("¿Desea confirmar la operación?");
      setOpenDialog(false);

      // Solo eliminar el producto si el usuario confirma
      if (result && productToDelete) {
        
        deleteProduct(productToDelete); // Llamada a la función para eliminar el producto
      }
    }
  }, [openDialog, productToDelete]);

  // Función para manejar la eliminación del producto
  const changeDialog = (name) => {
    console.log(name);
    setProductToDelete(name); // Almacena el nombre del producto que se desea eliminar
    setOpenDialog(true); // Abre el cuadro de diálogo de confirmación
  };



  return (
    <>
      <BrowserRouter>
          <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <Link className='navbar-brand' to="/crearProducto">Agregar nuevo producto</Link>
            <Link className='navbar-brand' to="/">Mostrar productos</Link>
          </nav>

        <Routes>
          <Route path='/crearProducto' element={<FormProduct />} />
          <Route path='/updateProduct' element={<FormProduct />} />
          <Route path='/' element={<ProductTableView products={products}  changeDialog={changeDialog}/>} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App
