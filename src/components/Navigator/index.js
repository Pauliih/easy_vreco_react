import React, { Component } from 'react';
import './styles.css';

class Navigator extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="col-12 col-md-2 d-flex justify-content-center">
              <Findme />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="input-group-prepend">
                <label className="badge-pill">Origen</label>
                <input type="text" className="form-control" placeholder="Introduce una ubicación" id="origin-input"/>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="input-group-prepend">
                <label className="badge-pill">Destino</label>
                <input type="text" className="form-control" placeholder="Introduce una ubicación" id="destination-input"/>
              </div>
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-center" id="mode-selector">
              <button type="button" className="btn btn-outline-success" id="btn-rute">Ruta</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigator;
