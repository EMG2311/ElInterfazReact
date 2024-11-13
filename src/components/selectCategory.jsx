import { useEffect, useState } from "react"

export const SelectCategory = ({handleCategoryChange,category})=>{
    const [product,setProduct]=useState([]);
    const [error,setError]=useState();

    const fetchCategories = async () => {
        try {
          const response = await fetch("http://localhost:8080/category/toList");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          setError(error.message);
        }
      };
  
    return (<>
      <select className="form-select" onClick={fetchCategories} onChange={handleCategoryChange}>
        <option value={category}>{category}</option>
        {product.map((e) => {
          
          if(category!=e.name){
            return(
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
              )
          }
            
      })}
    </select>
    
    
    </>)
}