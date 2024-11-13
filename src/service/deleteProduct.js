export const deleteProduct = (name, products = [], setProducts) => {
  // Hacer la solicitud DELETE para eliminar el producto del backend
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
      return response.json(); // Retornamos la respuesta como JSON
    })
    .then(data => {
      alert("Producto eliminado:", data);
      const updatedProducts = products.filter(product => product.name !== name);
      setProducts(updatedProducts);
    })
    .catch(error => {
      alert("Error al eliminar el producto, por favor revisa el log:", error);
    });
}