import React, { Component } from 'react';
import {
  Map,
  TileLayer,
  Marker
} from 'react-leaflet';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export default class AppiaAntica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 41.81,
      lng: 12.56,
      zoom: 12,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      // <div className="App">
      //   <h1 className="App-title">Appia Antica</h1>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
            <Marker position={[this.state.lat, this.state.lng]} />
          </Map>
      // </div>
    );
  }
}

ReactDOM.render(<AppiaAntica />, document.getElementById('app'));
registerServiceWorker();
