import {useNavigate} from 'react-router-dom'


export const ProductView=({products , changeDialog})=>{

  const navigate = useNavigate()
  const onDeleteProduct=(name)=>{
    changeDialog(name)
  }

  const toUpdate = (product) => {
    navigate(`/updateProduct`, { state: { product } }); 
  };
    return(
        <>
        {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><button className='btn btn-danger' onClick={()=>onDeleteProduct(product.name)}>Borrar</button></td>
              <td><button className="btn btn-warning" onClick={()=>toUpdate(product)}>Modificar</button></td>
            </tr>
          ))}
        </>
    )
}