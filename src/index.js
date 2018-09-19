import React, { Component } from 'react';
import {
  Map,
  TileLayer,
  Marker
} from 'react-leaflet';
import ReactDOM from 'react-dom';
import Sites from "./Sites";
import registerServiceWorker from './registerServiceWorker';

export default class AppiaAntica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 41.8383745,
      lng: 12.5359036,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="App">
        <h1 className="App-title">Siti archeologici di Parco Regionale dell'Appia Antica</h1>
        <h2 className="App-title">attraverso una query fatta su OpenStreetMap</h2>
        <p>Per favore sii paziente, potrebbe volerci un momento per caricare la carta.</p>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
            <Sites />
          </Map>
      </div>
    );
  }
}

ReactDOM.render(<AppiaAntica />, document.getElementById('app'));
registerServiceWorker();
