import React from 'react';

export default class BoutonAjouterUnBus extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};

    this.onAjouterUnBus = this.onAjouterUnBus.bind(this);
  }
  
  async onAjouterUnBus(event) {
    event.preventDefault();
    
    await fetch(`http://localhost:3000/bus/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.props.dernierId + 1
      })
    });
    this.props.mettreAJourBuses();
  }

  render() {
    return (<button onClick={this.onAjouterUnBus}>+ Ajouter un bus</button>);
  }

}