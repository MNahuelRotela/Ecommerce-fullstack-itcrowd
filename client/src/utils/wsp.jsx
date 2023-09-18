export function generarMensajeCarrito(cartProducts) {
    let mensaje = "¡Hola! Estoy interesado en los siguientes productos:\n";
  
    cartProducts.forEach((product) => {
      mensaje += `\nProducto: ${product.name}\n`;
      mensaje += `Precio: $${product.finalPrice}\n`;
      mensaje += `Imagen: ${product.img_url}\n`;
      mensaje += `Cantidad: ${product.quantity}\n`;
      // Agrega más detalles del producto según sea necesario
    });
  
    mensaje += `\nTotal: $${cartProducts.reduce(
      (total, product) => total + product.finalPrice * product.quantity,
      0
    )}`;
  
    // Codificar el mensaje en formato URL
    const mensajeCodificado = encodeURIComponent(mensaje);
  
    return mensajeCodificado;
  }