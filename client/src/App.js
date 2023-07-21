import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import ProyectosAdmin from './paginas/proyectos/ProyectosAdmin';
import ProyectosCrear from './paginas/proyectos/ProyectosCrear';
import ProyectosEditar from './paginas/proyectos/ProyectosEditar';
import TareasAdmin from './paginas/proyectos/TareasAdmin';
import TareasCrear from './paginas/proyectos/TareasCrear';
import TareasEditar from './paginas/proyectos/TareasEditar';
import Admin from './paginas/Admin';
import ProductosAdmin from './paginas/inventario/ProductosAdmin';
import ProductosCrear from './paginas/inventario/ProductosCrear';
import ProveedorCrear from './paginas/proveedores/ProveedorCrear';
import ProveedorAdmin from './paginas/proveedores/ProveedorAdmin';
import UsuariosAdmin from './paginas/usuarios/UsuariosAdmin';
import UsuarioCrear from './paginas/usuarios/UsuarioCrear';



function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/admin" exact element={<Admin/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/inventario" exact element={<ProductosAdmin/>}/>
          <Route path="/productos-crear" exact element={<ProductosCrear/>}/>
          <Route path="/proveedores" exact element={<ProveedorAdmin/>}/>
          <Route path="/proveedor-crear" exact element={<ProveedorCrear/>}/>
          <Route path="/proveedor-editar" exact element={<ProductosCrear/>}/>
          <Route path="/usuarios" exact element={<UsuariosAdmin/>}/>
          <Route path="/usuario-crear" exact element={<UsuarioCrear/>}/>
          <Route path="/usuario-editar" exact element={<ProductosCrear/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idproyecto" exact element={<ProyectosEditar/>}/>
          <Route path="/tareas-admin/:idproyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idproyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idproyecto" exact element={<TareasEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
