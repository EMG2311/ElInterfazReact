import { useEffect, useState } from "react"
import { SelectCategory } from "./selectCategory";
import { SuccessView } from "./SuccessView";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../service/submitFormProduct";

export const FormProductUpdate=()=>{

    const [success, setSuccess] = useState(false);
    const location= useLocation();
    const [error, setError] = useState(false);
    const [name,setName] = useState();
    const [stock,setStock] = useState();
    const [price,setPrice] = useState();
    const [category,setCategory] = useState();
    const {product} = location.state || {};

    const navigate = useNavigate()
    useEffect(() => {
        if (product) {
            setName(product.name);
            setStock(product.stock);
            setPrice(product.price);
            setCategory(product.category);
        }
    }, []);
    
    const handleCategoryChange  =(value)=>{
        setCategory(value.target.value);
    }

    const onClose=()=>{
        navigate('/'); 
        window.location.reload();
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        var {product} = location.state || {};
        const product1 ={
            "name":product.name,
            "newName":name,
            "stock":stock,
            "price":price,
            "category":category
        }
        console.log(product1);
        updateProduct(product1,setSuccess,setError);
        onClose;
        
      };


    return (
        <>
            <div className="container mt-5">
            <h2>Formulario de Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Nombre <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" name="name" required
                    onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    <div className="invalid-feedback">
                        El campo nombre es obligatorio.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Stock <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="stock" name="stock" min="1" required
                    value={stock}
                    onChange={(e)=>{setStock(e.target.value)}}/>
                    <div className="invalid-feedback">
                        El stock debe ser un número positivo.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Precio <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="price" name="price" step="0.01" min="0.01" required
                    onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    <div className="invalid-feedback">
                        El precio debe ser un número positivo.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Categoría</label>
                    <SelectCategory handleCategoryChange={handleCategoryChange} category={category}/>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>

        { success ==true ?<SuccessView message="La operacion fue un exito!!" onClose={onClose}/>: null}
        {error == true ?  <SuccessView message="La operacion Fracaso" onClose={onClose}/> : null}
        </>
    )
}