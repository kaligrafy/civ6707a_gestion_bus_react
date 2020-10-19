import React from 'react';

export default class FormModifierBus extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      bus: this.props.bus
    };

    this.onChangeImmatriculation = this.onChangeImmatriculation.bind(this);
    this.onChangeMarque          = this.onChangeMarque.bind(this);
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

  async onSupprimerBus(event) {
    event.preventDefault();
    await fetch(`http://localhost:3000/bus/${this.state.bus.id}/`, {
      method: 'DELETE'
    });
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
  }

  render() {
    return (
      <form id="form_modifier_bus" onSubmit={this.onConfirmerChangements}>

        <label>Immatriculation</label>
        <input 
          type="text"
          id="immatriculation"
          name="immatriculation"
          value={this.state.bus.immatriculation}
          onChange={this.onChangeImmatriculation}
        />
        <label>Marque</label>
        <input 
          type="text"
          id="marque"
          name="marque"
          value={this.state.bus.marque}
          onChange={this.onChangeMarque}
        />
        <input type="submit" id="submit" value="Confirmer" />
        <button onClick={this.onSupprimerBus}>Supprimer ce bus</button>
      </form>
    );
  }

}