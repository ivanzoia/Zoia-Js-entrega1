// Precios
    const remeraPrecio= 15000;
    const gorraPrecio = 10000;

    // Cantidades iniciales
    let cantidadRemeras = 0;
    let cantidadGorras = 0;

let MENU = `Bienvenidos a Juemix
           ¿Que desea Comprar?
           1- Remeras
           2- Gorras
           3- Solo estaba mirando
           `
    do {
      MENU = prompt(MENU);

      switch(MENU) {
        case "1":
          let cantRemeras = parseInt(prompt("¿Cuántas remeras quiere comprar?"));
          if (!isNaN(cantRemeras) && cantRemeras > 0) {
            cantidadRemeras += cantRemeras;
            alert(`Agregaste ${cantRemeras} remeras) al carrito.`);
          } else {
            alert("Cantidad inválida.");
          }
          break;

        case "2":
          let cantGorras = parseInt(prompt("¿Cuántas gorras quiere comprar?"));
          if (!isNaN(cantGorras) && cantGorras > 0) {
            cantidadGorras += cantGorras;
            alert(`Agregaste ${cantGorras} gorras al carrito.`);
          } else {
            alert("Cantidad inválida.");
          }
          break;

        case "3":
          alert("Gracias Vuelva Pronto.");
          break;

        default:
          alert("Opción no válida. Stock 10 unidades maximo.");
      }
    } while (MENU !== "10");

    // Mostrar resumen
    const total = (cantidadRemeras * remeraPrecio) + (cantidadGorras * gorraPrecio);
    alert(
      `Resumen de tu carrito:\n` +
      `Remeras: ${cantidadRemeras} x $${remeraPrecio} = $${cantidadRemeras * gorraPrecio}\n` +
      `Gorras: ${cantidadGorras} x $${gorraPrecio} = $${cantidadGorras * gorraPrecio}\n` +
      `Total a pagar: $${total}`
    );