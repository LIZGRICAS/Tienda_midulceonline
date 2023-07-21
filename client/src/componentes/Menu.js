import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/inventario"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Inventario
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/proveedores"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Proveedores
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/usuarios"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Usuarios
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/proyectos-admin"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Facturas
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/proyectos-admin"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Proyectos
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/proyectos-admin"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Negocio
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/proyectos-admin"} className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Finanzas
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Menu;