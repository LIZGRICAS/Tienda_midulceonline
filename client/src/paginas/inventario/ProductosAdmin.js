import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';
const ProductosAdmin = () => {
  
    const [proyectos, setProyectos] = useState([]);

    const cargarProyectos = async () => {
        const response = await APIInvoke.invokeGET(`/api/proyectos`);
        //console.log(response.proyectos);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarProyectos();
    }, [])

    const eliminarProyecto = async (e, idProyecto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/proyectos/${idProyecto}`);

        if (response.msg === 'Proyecto eliminado') {
            const msg = "El producto fue borrado correctamente.";
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
            cargarProyectos();
        } else {
            const msg = "El producto no fue borrado correctamente.";
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
        }

    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de Productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/inventario"}
                />

                <section className="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/productos-crear"} className="btn btn-block btn-primary btn-sm">Crear Producto</Link></h3>
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
                                        <th style={{ width: '20%' }}>Imagen</th>
                                        <th style={{ width: '20%' }}>Nombre</th>
                                        <th style={{ width: '10%' }}>Código</th>
                                        <th style={{ width: '15%' }}>Categoría</th>
                                        <th style={{ width: '10%' }}>UndMedida</th>
                                        <th style={{ width: '10%' }}>Descripción</th>
                                        <th style={{ width: '10%'}}>VrCompra</th>
                                        <th style={{ width: '10%' }}>VrVenta</th>
                                        <th style={{ width: '10%' }}>SinRebaja</th>
                                        <th style={{ width: '10%' }}>Cant.</th>
                                        <th style={{ width: '10%' }}>Calificación</th>
                                        <th style={{ width: '10%' }}>Proveedor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>
                                                        <Link to={`/tareas-admin/${item._id}@${item.nombre}`} className="btn btn-sm btn-info">Tareas</Link>&nbsp;&nbsp;
                                                        <Link to={`/proyectos-editar/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarProyecto(e, item._id)} className="btn btn-sm btn-danger">Borrar</button>
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

export default ProductosAdmin