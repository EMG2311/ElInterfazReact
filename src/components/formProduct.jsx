import { useState } from "react"
import {SubmitFormProduct} from "../service/submitFormProduct"
import { SelectCategory } from "./selectCategory";

export const FormProduct = ()=>{
    const [name,setName]=useState("");
    const [stock,setStock]=useState(0);
    const [price,setPrice]=useState(0);
    const [category,setCategory]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        console.log("name: "+name+ "stock: "+stock +"price. "+ price +"category: "+ category)
        // Llamar a la función solo cuando se envíe el formulario
        SubmitFormProduct(name, stock, price, category);
        
        
      };

      const handleCategoryChange  =(value)=>{
            setCategory(value.target.value);
      }

    return (
        <>
            <div class="container mt-5">
            <h2>Formulario de Producto</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="name" name="name" required
                    onChange={(e)=>setName(e.target.value)}/>
                    <div class="invalid-feedback">
                        El campo nombre es obligatorio.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="stock" class="form-label">Stock <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="stock" name="stock" min="1" required
                    onChange={(e)=>setStock(e.target.value)}/>
                    <div class="invalid-feedback">
                        El stock debe ser un número positivo.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Precio <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="price" name="price" step="0.01" min="0.01" required
                    onChange={(e)=>setPrice(e.target.value)}/>
                    <div class="invalid-feedback">
                        El precio debe ser un número positivo.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="category" class="form-label">Categoría</label>
                    <SelectCategory handleCategoryChange={handleCategoryChange}/>
                </div>

                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        </>
    )
}