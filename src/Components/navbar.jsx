import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Narcisos-ERP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/proovedor/nuevo">Proovedor</Link>
            <Link className="nav-item nav-link" to="/cliente/nuevo">Cliente</Link>
            <Link className="nav-item nav-link" to="/articulo/nuevo">Producto</Link>
            <Link className="nav-item nav-link" to="/compra/nueva">Compra</Link>
            <Link className="nav-item nav-link" to="/venta/nueva">Venta</Link>
            <Link className="nav-item nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Ventas</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
