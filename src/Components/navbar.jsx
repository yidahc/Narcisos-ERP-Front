import React from 'react';

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
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/proovedor/nuevo">Proovedor</a>
            <a className="nav-item nav-link" href="/cliente/nuevo">Cliente</a>
            <a className="nav-item nav-link" href="/articulo/nuevo">Producto</a>
            <a className="nav-item nav-link" href="/compra/nueva">Compra</a>
            <a className="nav-item nav-link" href="/venta/nueva">Venta</a>
            <a className="nav-item nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Ventas</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
