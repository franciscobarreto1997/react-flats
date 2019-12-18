import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx';

class SimpleMap extends Component {
  render() {
    {console.log(process.env.REACT_APP_GOOGLE_API_KEY)}
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
