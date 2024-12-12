export const createOrder =(products)=>{
console.log(products)
fetch("http://localhost:8080/order/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  })
    .then((response) => { 
    if (response.ok) {
      //setSuccess(true);
      //setError(false);
      return response.json(); // Devuelve la promesa de la respuesta JSON
    } else {
      //setSuccess(false);
      //setError(true);
      throw new Error(`Error HTTP: ${response.status}`);
  }})
    .then((data) => {
      console.log("Éxito:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}
