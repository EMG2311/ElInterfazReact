export const SubmitFormProduct=(name, stock, price, category)=>{

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
        .then((response) => response.json())
        .then((data) => {
          console.log("Éxito:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

}