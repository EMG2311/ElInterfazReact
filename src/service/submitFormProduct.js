import { json } from "react-router-dom";

export const  SubmitFormProduct= (name, stock, price, category,setSuccess,setError)=>{

    const product ={
        "name": name,
        "stock":stock,
        "price":price,
        "category":category
    }

     fetch("http://localhost:8080/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => { 
        if (response.ok) {
          setSuccess(true);
          setError(false);
          return response.json(); // Devuelve la promesa de la respuesta JSON
        } else {
          setSuccess(false);
          setError(true);
          throw new Error(`Error HTTP: ${response.status}`);
      }})
        .then((data) => {
          console.log("Éxito:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

}

export const viewProduct = (setData, setError)=>{

  fetch("http://localhost:8080/product/view")
  .then(response => response.json())
  .then(data=>setData(data))
  .catch(error=>setError(error));
}

export const updateProduct=(product,setSuccess,setError)=>{
  fetch("http://localhost:8080/product/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => { 
    if (response.ok) {
      setSuccess(true);
      setError(false);
      return response.text(); // Devuelve la promesa de la respuesta JSON
    } else {
      setSuccess(false);
      setError(true);
      throw new Error(`Error HTTP: ${response.status}`);
  }})
    .then((data) => {
      console.log("Éxito:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}