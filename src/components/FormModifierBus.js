import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

console.log(process.env.BLABLA);

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
    return (
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

        <label>Commentaires</label>
        <textarea
          cols="10"
          rows="3"
          id="commentaires"
          name="commentaires"
          onChange={this.onChangeCommentaires}
        />

        <Map style="mapbox://styles/mapbox/streets-v8"/>

        <input type="submit" id={`confirmer_bus_${this.state.bus.id}`} value="Confirmer" />
        <button onClick={this.onSupprimerBus}>Supprimer ce bus</button>
      </form>
    );
  }

}