import React from 'react';
import {ProductView} from './productView'
import { NavMain } from './NavMain';
export const ProductTableView = ({ products, changeDialog, onDeleteProduct }) => {

  return (
    <>
      <NavMain/>
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