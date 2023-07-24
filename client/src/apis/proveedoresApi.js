const listProveedores = () =>
    fetch('https://apimidulceonline.azurewebsites.net/proveedores/all').then((response) => response.json()).catch((err) => console.log(err));


const createProveedor = (
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
    ) => { /* no se recibe el id como parametro, sino que se genera automaticamente */
return fetch("https://apimidulceonline.azurewebsites.net/proveedores/save", {
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
        proveedor
     }),
});
};


const deleteProveedor = (id) => {
return fetch(`https://apimidulceonline.azurewebsites.net/proveedores/destroy/${id}`, { /* backticks para insertar variable */
    method: "DELETE", /* no interesa los headers ni body por que no estamos mandando información */
});
};

/* buscar producto */
const detailProveedor = async (id) => {
    return fetch(`https://apimidulceonline.azurewebsites.net/proveedores/search/${id}`).then((response) =>
        response.json()
).catch((err) => console.log(err));
};

/* modificar producto */
const updateProveedor = (
    id,
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
) => {
fetch(`https://apimidulceonline.azurewebsites.net/proveedores/update/${id}`, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
    },
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
}).then((response) => response).catch((err) => console.log(err));
};

      export const proveedoresApi = {
        listProveedores,
        createProveedor,
        deleteProveedor,
        detailProveedor,
        updateProveedor,
      };