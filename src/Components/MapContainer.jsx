import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
       
          <Marker
    					name={'nauyaca_mx'}
   						position={{lat: 19.432803, lng: -99.133244}} />
          
                  <Marker
						 onClick={this.onMarkerClick}
    						name={'North Tatto'}
   						 	position={{lat:19.35417, lng: -99.17222}} />

             <Marker
						 onClick={this.onMarkerClick}
    						name={'studio onix'}
   						 	position={{lat:19.401667, lng:  -99.158333}} />

            <Marker
						 onClick={this.onMarkerClick}
    						name={'daggamx'}
   						 	position={{lat:19.418702, lng:  -99.159567}} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkM9KxZy0d3Ffhxv35A_Kwtyq8BZ-v6Kk'
})(MapContainer);