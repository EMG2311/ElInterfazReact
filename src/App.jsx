import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap'; // Importando el Modal de React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

import { ProductTableView } from './components/ProductTableView';
import { FormProduct } from './components/FormProduct';
import { FormProductUpdate } from './components/FormProductUpdate';
import {  viewProduct } from './service/submitFormProduct'; // Asegúrate que estas funciones estén correctamente importadas y usadas.
import { deleteProduct } from './service/deleteProduct';
import { ListCarrito } from './components/listCarrito';
import { Carrito } from './components/Carrito';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    viewProduct(setProducts, setError);
  }, []);

  useEffect(() => {
    if (openDialog) {
      const result = window.confirm("¿Desea confirmar la operación?");
      setOpenDialog(false);

      if (result && productToDelete) {
        deleteProduct(productToDelete, products, setProducts);
      }
    }
  }, [openDialog, productToDelete, products]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const changeDialog = (name) => {
    setProductToDelete(name);
    setOpenDialog(true);
  };

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/updateProduct' element={<FormProductUpdate />} />
          <Route path='/' element={<ProductTableView products={products} changeDialog={changeDialog} />} />
          <Route path='/comprar' element={<ListCarrito/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>


     
    </>
  );
}

export default App;