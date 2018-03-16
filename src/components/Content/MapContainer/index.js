import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zoom: 7,
      lat: -33.4720,
      lng: -70.6470
    }
  }

  render() {
    const style = {
      width: '73%',
      height: '96%'
    }
    if (!this.props.loaded) {
      return <div>Cargando...</div>
    }
    return (
      <Map google={this.props.google} zoom={this.state.zoom} style={style} 
      initialCenter={{lat: this.state.lat, lng: this.state.lng}}/>  
    );
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
    this.loadMap();
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBnaDcE_KFlkhqBOoKXfiDhoka59nVx5Ws'),
}) (MapContainer)