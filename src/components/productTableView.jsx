import React from 'react';
import {ProductView} from './productView'
export const ProductTableView = ({ products, changeDialog, onDeleteProduct }) => {

  return (
    <>

      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
          </tr>
        </thead>
        <tbody>
          <ProductView products={products} changeDialog={changeDialog}/>
        </tbody>
      </table>
    </>
  );
};