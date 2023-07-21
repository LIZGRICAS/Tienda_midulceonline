import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProductosCrear = () => {
  const navigate = useNavigate();

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const crearProyecto = async () => {
    const data = {
      nombre: proyecto.nombre,
    };

    const response = await APIInvoke.invokePOST(`/api/proyectos`, data);
    const idProyecto = response._id;

    if (idProyecto === "") {
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
      navigate("/proyectos-admin");
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

      setProyecto({
        nombre: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearProyecto();
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
          ruta1={"/proyectos-admin"}
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
                      id="nombre"
                      name="url"
                      placeholder="Ingrese la url de la imagen del producto"
                      value={nombre}
                      onChange={onChange}
                      required
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
                      placeholder="Ingrese el nombre del producto"
                      value={nombre}
                      onChange={onChange}
                      required
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
                      placeholder="Ingrese el código del producto"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Categoría</label>
                    <select id="categoria" name="categoria" className="form-control" placeholder="Elige una opción" required>
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
                      type="number"
                      className="form-control"
                      id="unidadMedida"
                      name="unidadMedida"
                      placeholder="Ingrese la unidad de medida"
                      value={nombre}
                      onChange={onChange}
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
                      value={nombre}
                      onChange={onChange}
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
                      value={nombre}
                      onChange={onChange}
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
                      value={nombre}
                      onChange={onChange}
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
                      value={nombre}
                      onChange={onChange}
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
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                <div className="form-group ">
                    <label htmlFor="nombre">Calificación</label>
                    <p id="calificacion" className="clasificacion form-group-star">
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label htmlFor="radio5">★</label>
                    </p>
                  </div>
                  
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Proveedor </label>
                    <select id="proveedor" name="proveedor" className="form-control" required > 
                      <option value="colombina">Colombina </option>
                      <option value="montBlanc">Mont Blanc</option>
                      <option value="nestle">Nestle</option>
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
