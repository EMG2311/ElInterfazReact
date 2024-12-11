import { useState } from "react"
import {SubmitFormProduct} from "../service/submitFormProduct"
import { SelectCategory } from "./selectCategory";
import { SuccessView } from "./SuccessView";
import { useNavigate } from "react-router-dom";

export const FormProduct = ({handleCloseModal})=>{
    const [name,setName]=useState("");
    const [stock,setStock]=useState(0);
    const [price,setPrice]=useState(0);
    const [category,setCategory]=useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    //const navegate = useNavigate();


    const onClose= ()=>{
        handleCloseModal();
      //  navegate('/');
        window.location.reload();
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        console.log("name: "+name+ "stock: "+stock +"price. "+ price +"category: "+ category)
        // Llamar a la función solo cuando se envíe el formulario
        SubmitFormProduct(name, stock, price, category,setSuccess,setError);
        onClose;
        
      };

      const handleCategoryChange  =(value)=>{
            setCategory(value.target.value);
      }

    return (
        <>
            <div className="container mt-5">
            <h2>Formulario de Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Nombre <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" name="name" required
                    onChange={(e)=>setName(e.target.value)}/>
                    <div className="invalid-feedback">
                        El campo nombre es obligatorio.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Stock <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="stock" name="stock" min="1" required
                    onChange={(e)=>setStock(e.target.value)}/>
                    <div className="invalid-feedback">
                        El stock debe ser un número positivo.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Precio <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="price" name="price" step="0.01" min="0.01" required
                    onChange={(e)=>setPrice(e.target.value)}/>
                    <div className="invalid-feedback">
                        El precio debe ser un número positivo.
                    </div>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Categoría</label>
                    <SelectCategory handleCategoryChange={handleCategoryChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>

        { success ==true ?<SuccessView message="La operacion fue un exito!!" onClose={onClose}/>: null}
        {error == true ?  <SuccessView message="La operacion Fracaso" onClose={onClose}/> : null}
        </>
    )
}