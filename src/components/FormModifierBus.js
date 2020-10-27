import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { Layer } from "react-mapbox-gl";
import { Feature } from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

export default class FormModifierBus extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      bus: this.props.bus
    };

    this.onChangeImmatriculation = this.onChangeImmatriculation.bind(this);
    this.onChangeMarque          = this.onChangeMarque.bind(this);
    this.onChangeCommentaires    = this.onChangeCommentaires.bind(this);
    this.onConfirmerChangements  = this.onConfirmerChangements.bind(this);
    this.onSupprimerBus          = this.onSupprimerBus.bind(this);
    this.onMapClick              = this.onMapClick.bind(this);
    this.onDragEnd               = this.onDragEnd.bind(this);
  }

  onChangeImmatriculation(event) {
    const bus = this.state.bus;
    bus.immatriculation = event.target.value;
    this.setState({
      bus
    });
  }

  onChangeMarque(event) {
    const bus = this.state.bus;
    bus.marque = event.target.value;
    this.setState({
      bus
    });
  }

  onChangeCommentaires(event) {
    const bus = this.state.bus;
    bus.commentaires = event.target.value;
    this.setState({
      bus
    });
  }

  onMapClick(map, event) {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
    const bus = this.state.bus;
    bus.garageCoordinates = coordinates;
    this.setState({
      bus
    });
  }

  onDragEnd(event) {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
    const bus = this.state.bus;
    bus.garageCoordinates = coordinates;
    this.setState({
      bus
    });
  }

  async onSupprimerBus(event) {
    event.preventDefault();
    await fetch(`http://localhost:3000/bus/${this.state.bus.id}/`, {
      method: 'DELETE'
    });
    this.props.mettreAJourBuses();
  }

  async onConfirmerChangements(event) {
    event.preventDefault();
    await fetch(`http://localhost:3000/bus/${this.state.bus.id}/`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.bus)
    });
    this.props.mettreAJourBuses();
  }

  render() {
    console.log('this.state.bus.garageCoordinates', this.state.bus.garageCoordinates);
    return (
      <React.Fragment>
      <form id={`form_modifier_bus_${this.state.bus.id}`} onSubmit={this.onConfirmerChangements}>

        <label>Immatriculation</label>
        <input 
          type="text"
          id="immatriculation"
          name="immatriculation"
          value={this.state.bus.immatriculation}
          onChange={this.onChangeImmatriculation}
        />

        <label>Marque</label>
        <select
          type="text"
          id="marque"
          name="marque"
          value={this.state.bus.marque}
          onChange={this.onChangeMarque}
        >
          <option value="scania">Scania</option>
          <option value="mercedes">Mercedes-Benz</option>
          <option value="volvo">Volvo</option>
          <option value="novabus">NovaBus</option>
        </select>

        <div>
          <label>Commentaires</label>
          <textarea
            cols="10"
            rows="3"
            id="commentaires"
            name="commentaires"
            onChange={this.onChangeCommentaires}
          />
        </div>

        <div>
          <label>Position du garage de ce bus</label>
          <Map 
            style="mapbox://styles/mapbox/streets-v8"
            className="carte"
            center={[-73.6,45.5]}
            zoom={[8]}
            onClick={this.onMapClick}
          >
            {<Layer
              type="circle"
              id={`garageBus${this.state.bus.id}`}
              paint={{
                "circle-color": "#ff0000"
              }}
            >
            {this.state.bus.garageCoordinates && <Feature
              coordinates={this.state.bus.garageCoordinates}
              draggable={true}
              onDragEnd={this.onDragEnd}
            />}
            </Layer>}

           
          </Map>
        </div>

        <input type="submit" id={`confirmer_bus_${this.state.bus.id}`} value="Confirmer" />
        <button onClick={this.onSupprimerBus}>Supprimer ce bus</button>
      </form>
      
      </React.Fragment>
    );
  }

}