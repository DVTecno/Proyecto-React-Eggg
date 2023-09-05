export async function obtenerProductos() {
    const response = await fetch("http://fakestoreapi.com/products");
    const data = await response.json();
    return data;
    }