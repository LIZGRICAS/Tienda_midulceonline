import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import swal from "sweetalert";
import { productosApi } from "../../apis/productosApi";
const ProductosAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaProducto, setCategoriaProducto] = useState([
    "Caramelos",
    "Chocolates",
    "Galletas",
  ]);
  const [proveedorProducto, setProveedorProducto] = useState([
    "Colombina",
    "Mont Blanc",
    "Nestle",
  ]);
  const [totalProductos, setTotalProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await productosApi.listProducts();
    console.log(response);
    setProductos(response);
    setTotalProductos(response);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    const categorySelect = e.target.value;
    console.log(categorySelect);

    const resultProductCategory = totalProductos.filter(
      (product) => product.categoria === categorySelect
    );
    console.log(resultProductCategory);

    if (categorySelect === "Categoria") {
      setProductos([...totalProductos]);
    } else {
      setProductos([...resultProductCategory]);
    }
  };

  const handleOnChangeProveedor = (e) => {
    const proveedorSelect = e.target.value;

    const resultProductProveedor = totalProductos.filter(
      (product) => product.proveedor === proveedorSelect
    );

    if (proveedorSelect === "Proveedor") {
      setProductos([...totalProductos]);
    } else {
      setProductos([...resultProductProveedor]);
    }
  };

 
  const eliminarProducto = async (e, idProyecto) => {
    e.preventDefault();
    console.log(idProyecto)
    const response = await productosApi.deleteProduct(idProyecto)
    console.log(response)
    if (response.status === 200 ) {
      const msg = "El producto fue borrado correctamente.";
      swal({
        title: "Información",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      cargarProductos();
    } else {
      const msg = "El producto no fue borrado correctamente.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de Productos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Productos"}
          ruta1={"/admin"}
        />

        <section className="content u-full-width">
          <div className="card u-full-width">
            <div className="card-header d-flex flex-row">
              <h3 className="card-title mr-auto ">
                <Link
                  to={"/productos-crear"}
                  className="btn btn-block btn-primary btn-sm"
                >
                  Crear Producto
                </Link>
              </h3>
              <div className="form-group">
                <select
                  name="categoria"
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={handleOnChange}
                  required
                >
                  <option selected>Categoria</option>
                  {categoriaProducto.map((categoria) => (
                    <option value={categoria} key={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mr-auto">
                <select
                  name="proveedor"
                  className="custom-select"
                  id="inputGroupSelect01"
                  required
                  onChange={handleOnChangeProveedor}
                >
                  <option selected>Proveedor</option>
                  {proveedorProducto.map((Proveedor) => (
                    <option value={Proveedor} key={Proveedor}>
                      {Proveedor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered align-self-center">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>Imagen</th>
                    <th style={{ width: "10%" }}>Nombre</th>
                    <th style={{ width: "5%" }}>Cód.</th>
                    <th style={{ width: "10%" }}>UndMedida</th>
                    <th style={{ width: "20%" }}>Descripción</th>
                    <th style={{ width: "5%" }}>VrCompra</th>
                    <th style={{ width: "5%" }}>VrVenta</th>
                    <th style={{ width: "5%" }}>Cant.</th>
                    <th style={{ width: "5%" }}>Item</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((item) => (
                    <tr key={item._id}>
                      <td><img src={item.imagen}  alt="img-product" className="img-BD"></img></td>
                      <td>{item.nombre}</td>
                      <td>{item.codigo}</td>
                      <td>{item.unidadMedida}</td>
                      <td>{item.descripcion}</td>
                      <td>{item.valorCompra}</td>
                      <td>{item.valorVenta}</td>
                      <td>{item.cantidad}</td>
                      <td>
                        <Link
                          to={`/productos-editar/${item._id}@${item.nombre}`}
                          className="btn btn-sm btn-primary mr-auto"
                        >
                          Editar
                        </Link>
                        &nbsp;&nbsp;
                        <button
                          onClick={(e) => eliminarProducto(e, item._id)}
                          className="btn btn-sm btn-danger mr-auto"
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductosAdmin;
