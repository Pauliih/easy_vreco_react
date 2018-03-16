import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '75%',
      height: '100%'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBnaDcE_KFlkhqBOoKXfiDhoka59nVx5Ws'),
}) (MapContainer)