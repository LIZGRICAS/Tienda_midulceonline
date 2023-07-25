import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { productosApi } from "../../apis/productosApi";

const ProductosEditar = () => {
const navigate = useNavigate();
  const { idproducto } = useParams();

  console.log(idproducto);
  let arreglo = idproducto.split("@");
  console.log(arreglo);
  const idproduct = arreglo[0];
  const [productoDetail, setProductoDetail] = useState("");

  const cargarProductoDetail = async () => {
    const response = await productosApi.detailProduct(idproduct);
    console.log(response)
    setProductoDetail(response);
  };

  useEffect(() => {
    cargarProductoDetail();
  }, []);

  console.log(productoDetail);

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
  } = productoDetail;

  console.log(productoDetail);
  

  const onChange = (e) => {
    setProductoDetail({
      ...productoDetail,
      [e.target.name]: e.target.value,
    });
  };

  const editarProducto = async () => {

    let arreglo = idproducto.split('@');
    console.log(arreglo)
    const id = arreglo[0];
console.log(id)

    let data = {
      nombre: productoDetail.nombre,
      codigo: productoDetail.codigo,
      categoria: productoDetail.categoria,
      imagen: productoDetail.imagen,
      unidadMedida: productoDetail.unidadMedida,
      descripcion: productoDetail.descripcion,
      valorCompra: productoDetail.valorCompra,
      valorVenta: productoDetail.valorVenta,
      sinRebaja: productoDetail.sinRebaja,
      cantidad: productoDetail.cantidad,
      calificacion: productoDetail.calificacion,
      proveedor: productoDetail.proveedor
  }

  const data1 = JSON.stringify(data)
  console.log(id, data1)

    const response = await productosApi.updateProduct(
    id, data
    );

    const idProductoEditado = response._id

    console.log( idProductoEditado)

        if (idProductoEditado !== id) {
            const msg = "El proyecto no fue editado correctamente.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        } else {
            navigate("/inventario");
            const msg = "El proyecto fue editado correctamente.";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
        }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editarProducto();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Edición de Productos"}
          breadCrumb1={"Listado de Productos"}
          breadCrumb2={"Edición"}
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
                      type="url"
                      className="form-control"
                      id="imagen"
                      name="imagen"
                      placeholder={productoDetail.imagen}
                      value={imagen}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder={productoDetail.nombre}
                      value={nombre}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Código</label>
                    <input
                      type="number"
                      className="form-control"
                      id="codigo"
                      name="codigo"
                      placeholder={productoDetail.codigo}
                      value={codigo}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Categoría</label>
                    <select
                      id="categoria"
                      name={productoDetail.categoria}
                      className="form-control"
                      value={categoria}
                      onChange={onChange}
                    >
                      <option>{productoDetail.categoria}</option>
                      <option value="colombina">Caramelos</option>
                      <option value="montBlanc">Chocolates</option>
                      <option value="nestle">Galletas</option>
                    </select>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Unidad de medida</label>
                    <input
                      type="text"
                      className="form-control"
                      id="unidadMedida"
                      name="unidadMedida"
                      placeholder={productoDetail.unidadMedida}
                      value={unidadMedida}
                      onChange={onChange}
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
                      placeholder={productoDetail.descripcion}
                      value={descripcion}
                      onChange={onChange}
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
                      placeholder={productoDetail.valorCompra}
                      value={valorCompra}
                      onChange={onChange}
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
                      placeholder={productoDetail.valorVenta}
                      value={valorVenta}
                      onChange={onChange}
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
                      placeholder={productoDetail.sinRebaja}
                      value={sinRebaja}
                      onChange={onChange}
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
                      placeholder={productoDetail.cantidad}
                      value={cantidad}
                      onChange={onChange}
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
                        name="estrellas"
                        value={5}
                      />
                      <label htmlFor="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value={4}
                      />
                      <label htmlFor="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value={3}
                      />
                      <label htmlFor="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value={2}
                      />
                      <label htmlFor="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
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
                      className="form-control"
                      value={proveedor}
                      onChange={onChange}
                    >
                      <option>{productoDetail.proveedor}</option>
                      <option value="colombina">Colombina </option>
                      <option value="montBlanc">Mont Blanc</option>
                      <option value="nestle">Nestle</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Editar
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

export default ProductosEditar;
