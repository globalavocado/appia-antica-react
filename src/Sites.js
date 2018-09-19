import React, { Component } from 'react';
import { GeoJSON, Marker} from "react-leaflet";
import * as overpass from "query-overpass";

export default class Sites extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        geojson: undefined
      };
  }

  componentDidMount() {
    const query = `[out:json];
                    relation
                      [boundary=protected_area]
                      ["name"="Parco Naturale Regionale Appia Antica"];
                    out geom;
                    map_to_area;
                    node
                      ["historic"="archaeological_site"]
                      (area);
                    out body qt;`;

    const options = {
      flatProperties: true
    };
    overpass(query, this.dataHandler, options);
  }

  dataHandler = (error, osmData) => {
    if (!error && osmData.features !== undefined) {
      this.setState({geojson: osmData });
    }
  };

  render() {
    return this.state.geojson ? <GeoJSON data={this.state.geojson} /> : null;
  }
}


