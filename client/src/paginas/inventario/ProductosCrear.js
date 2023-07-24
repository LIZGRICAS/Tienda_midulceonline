import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { productosApi } from "../../apis/productosApi";

const ProductosCrear = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: "",
    codigo: "",
    categoria: "",
    imagen: "",
    unidadMedida: "",
    descripcion: "",
    valorCompra: "",
    valorVenta: "",
    sinRebaja: "",
    cantidad: "",
    calificacion: "",
    proveedor: "",
  });

  const {
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
  } = producto;

  console.log(producto);
  useEffect(() => {
    document.getElementById("imagen").focus();
  }, []);

  const onChange = (e) => {
    console.log(e);
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  console.log(
    producto.nombre,
    producto.codigo,
    producto.categoria,
    producto.imagen,
    producto.unidadMedida,
    producto.descripcion,
    producto.valorCompra,
    producto.valorVenta,
    producto.sinRebaja,
    producto.cantidad,
    producto.calificacion,
    producto.proveedor
  );

  const crearProducto = async () => {
console.log(producto.nombre,
  producto.codigo,
  producto.categoria,
  producto.imagen,
  producto.unidadMedida,
  producto.descripcion,
  producto.valorCompra,
  producto.valorVenta,
  producto.sinRebaja,
  producto.cantidad,
  producto.calificacion,
  producto.proveedor)

    const response = await productosApi.createProduct(
      producto.nombre,
      producto.codigo,
      producto.categoria,
      producto.imagen,
      producto.unidadMedida,
      producto.descripcion,
      producto.valorCompra,
      producto.valorVenta,
      producto.sinRebaja,
      producto.cantidad,
      producto.calificacion,
      producto.proveedor
    );
    console.log(response);
    const idProducto = response._id;

    if (idProducto === "") {
      const msg = "El producto no fue creado correctamente.";
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
    } else {
      navigate("/inventario");
      const msg = "El producto fue creado correctamente.";
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

      setProducto({
        nombre: "",
        codigo: "",
        categoria: "",
        imagen: "",
        unidadMedida: "",
        descripcion: "",
        valorCompra: "",
        valorVenta: "",
        sinRebaja: "",
        cantidad: "",
        calificacion: "",
        proveedor: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearProducto();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Creación de Productos"}
          breadCrumb1={"Listado de Productos"}
          breadCrumb2={"Creación"}
          ruta1={"/inventario"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
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
              <form onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Url imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imagen"
                      name="imagen"
                      placeholder="Ingrese la url de la imagen del producto"
                      value={imagen}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre (único)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      placeholder="Ingrese el nombre del producto"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Código (único)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="codigo"
                      name="codigo"
                      placeholder="Ingrese el código del producto"
                      onChange={onChange}
                      value={codigo}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Categoría</label>
                    <select
                      id="categoria"
                      name="categoria"
                      className="custom-select"
                      onChange={onChange}
                      value={categoria}
                      required
                    >
                      <option selected>Elige...</option>
                      <option value="Caramelos">Caramelos</option>
                      <option value="Chocolates">Chocolates</option>
                      <option value="Galletas">Galletas</option>
                    </select>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="unidadMedidas">Unidad de medida</label>
                    <input
                      type="text"
                      className="form-control"
                      id="unidadMedida"
                      name="unidadMedida"
                      placeholder="Ingrese la unidad de medida"
                      onChange={onChange}
                      value={unidadMedida}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Descripción</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descripcion"
                      name="descripcion"
                      placeholder="Ingrese la descripción del producto"
                      onChange={onChange}
                      value={descripcion}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Valor de compra</label>
                    <input
                      type="number"
                      className="form-control"
                      id="valorCompra"
                      name="valorCompra"
                      placeholder="Ingrese el valor de compra del producto"
                      onChange={onChange}
                      value={valorCompra}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Valor de venta</label>
                    <input
                      type="number"
                      className="form-control"
                      id="valorVenta"
                      name="valorVenta"
                      placeholder="Ingrese el valor de venta del producto"
                      onChange={onChange}
                      value={valorVenta}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Valor sin Rebaja</label>
                    <input
                      type="number"
                      className="form-control"
                      id="sinRebaja"
                      name="sinRebaja"
                      placeholder="Ingrese el valor de precio sinRebaja del producto"
                      onChange={onChange}
                      value={sinRebaja}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Cantidad</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      name="cantidad"
                      placeholder="Ingrese la cantidad del producto"
                      onChange={onChange}
                      value={cantidad}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group ">
                    <label htmlFor="nombre">Calificación</label>
                    <p
                      id="calificacion"
                      className="clasificacion form-group-star"
                      value={calificacion}
                      onChange={onChange}
                    >
                      <input
                        id="radio1"
                        type="radio"
                        name="calificacion"
                        value={5}
                      />
                      <label htmlFor="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="calificacion"
                        value={4}
                      />
                      <label htmlFor="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="calificacion"
                        value={3}
                      />
                      <label htmlFor="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="calificacion"
                        value={2}
                      />
                      <label htmlFor="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="calificacion"
                        value={1}
                      />
                      <label htmlFor="radio5">★</label>
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Proveedor </label>
                    <select
                      id="proveedor"
                      name="proveedor"
                      className="custom-select"
                      value={proveedor}
                      onChange={onChange}
                      required
                    >
                      <option selected>Elige...</option>
                      <option value="Colombina">Colombina </option>
                      <option value="Mont Blanc">Mont Blanc</option>
                      <option value="Nestle">Nestle</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductosCrear;
