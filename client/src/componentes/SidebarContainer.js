import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const SidebarContainer = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={"/admin"} className="brand-link">
                <img src={"https://i.ibb.co/4J5T6n1/logo-favicon.png"} alt="midulceonline-logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Admin Tienda</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                       &nbsp; 
                    </div>
                    <div className="info">
                       &nbsp; 
                    </div>
                    <div className="info">
                        <Link to={"/admin"} className="d-block">Menu Principal</Link>
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </aside>
    );
}

export default SidebarContainer;