import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProveedorCrear = () => {
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
          titulo={"Creación de Proveedor"}
          breadCrumb1={"Listado de Proveedores"}
          breadCrumb2={"Creación"}
          ruta1={"/proveedores"}
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
                    <label htmlFor="nombre">Número de Documento</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el número de documento"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese la dirección del proveedor"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Télefono</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el número télefonico"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el email de contacto"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
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

export default ProveedorCrear;
