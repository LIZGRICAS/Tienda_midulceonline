import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import swal from 'sweetalert';
import { proveedoresApi } from '../../apis/proveedoresApi';
const ProveedorAdmin = () => {
    const [proveedores, setProveedores] = useState([]);
  
    const cargarProveedores = async () => {
      const response = await proveedoresApi.listProveedores();
      console.log(response);
      setProveedores(response);
    };
  
    useEffect(() => {
       cargarProveedores();
    }, []);
  
     
   
    const eliminarProveedor = async (e, idProveedor) => {
      e.preventDefault();
      console.log(idProveedor)
      const response = await proveedoresApi.deleteProveedor(idProveedor)
      console.log(response)
      if (response.status === 200 ) {
        const msg = "El pro veedor fue borrado correctamente.";
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
      } else {
        const msg = "El produveedor no fue borrado correctamente.";
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
                    titulo={"Listado de Proveedores"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Proveedores"}
                    ruta1={"/admin"}
                />

                <section className="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/proveedor-crear"} className="btn btn-block btn-primary btn-sm">Crear Proveedor</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%' }}>Nombre</th>
                                        <th style={{ width: '10%' }}>Número de doc.</th>
                                        <th style={{ width: '10%' }}>Dirección</th>
                                        <th style={{ width: '10%'}}>Télefono</th>
                                        <th style={{ width: '10%' }}>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proveedores.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.numDoc}</td>
                                                    <td>{item.direccion}</td>
                                                    <td>{item.telefono}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <Link to={`/proveedor-editar/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarProveedor(e, item._id)} className="btn btn-sm btn-danger">Borrar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default ProveedorAdmin