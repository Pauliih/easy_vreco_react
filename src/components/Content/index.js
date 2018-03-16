import React, { Component } from 'react';
import TitleContent from './TitleContent';
import MapContainer from './MapContainer';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <section>
        <TitleContent />
        <div className="container-fluid col-12 d-flex justify-content-center">
          <div id="map">
            <MapContainer/>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;