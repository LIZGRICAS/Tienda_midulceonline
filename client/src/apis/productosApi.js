const listProducts = () =>
  fetch("https://apimidulceonline.azurewebsites.net/productos/all")
    .then((response) => response.json())
    .catch((err) => console.log(err));

const createProduct = (
  nombre,
  codigo,
  categoria,
  imagen,
  unidadMedida,
  descripcion,
  valorCompra,
  valorVenta,
  sinRebaja,
  cantidad,
  calificacion,
  proveedor
) => {
  /* no se recibe el id como parametro, sino que se genera automaticamente */
  return fetch("https://apimidulceonline.azurewebsites.net/productos/save", {
    /* POST crear nuevo recurso */
    method: "POST",
    /* encabezado define que tipo de archivo se va a recibir y el cuerpo de la petición con estructura de objeto */
    headers: {
      "Content-Type": "application/json",
    },
    /* esta estructura debe coincidir con la registrada en el simulador del API (db.json) */
    body: JSON.stringify({
      nombre,
      codigo,
      categoria,
      imagen,
      unidadMedida,
      descripcion,
      valorCompra,
      valorVenta,
      sinRebaja,
      cantidad,
      calificacion,
      proveedor,
    }),
  });
};

const deleteProduct = (id) => {
  return fetch(
    `https://apimidulceonline.azurewebsites.net/productos/destroy/${id}`,
    {
      /* backticks para insertar variable */
      method:
        "DELETE" /* no interesa los headers ni body por que no estamos mandando información */,
    }
  );
};

/* buscar producto */
const detailProduct = async (id) => {
  return fetch(
    `https://apimidulceonline.azurewebsites.net/productos/search/${id}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

/* modificar producto */

const updateProduct = async (id, data) => {
  return fetch(
    `https://apimidulceonline.azurewebsites.net/productos/update/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const productosApi = {
  listProducts,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct,
};
