import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import Admin from './paginas/Admin';
import ProductosAdmin from './paginas/inventario/ProductosAdmin';
import ProductosCrear from './paginas/inventario/ProductosCrear';
import ProductosEditar from './paginas/inventario/ProductosEditar';
import ProveedorAdmin from './paginas/proveedores/ProveedorAdmin';
import ProveedorCrear from './paginas/proveedores/ProveedorCrear';



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
          <Route path="/productos-editar/:idproducto" exact element={<ProductosEditar/>}/>
          <Route path="/proveedor-admin" exact element={<ProveedorAdmin/>}/>
          <Route path="/proveedor-crear" exact element={<ProveedorCrear/>}/>
          <Route path="/proveedor-editar/:idproducto" exact element={<ProductosEditar/>}/>
        
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
