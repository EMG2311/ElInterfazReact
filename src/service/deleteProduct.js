export const deleteProduct = (name)=>{

    fetch(`http://localhost:8080/product/delete/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Error en la solicitud");
          }
          return response.json(); // O response.text() si no hay JSON en la respuesta
        })
        .then(data => {
          alert("Producto eliminado:", data);
        })
        .catch(error => {
          alert("Error al eliminar el producto por favor revisar el log:  ", error);
        });
}