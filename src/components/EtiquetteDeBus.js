import React from 'react';
import FormModifierBus from './FormModifierBus';

export default class EtiquetteDeBus extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      
    };

  }

  render() {

    return (
      <React.Fragment>
        <p>{this.props.bus.id}: Immatriculation: {this.props.bus.immatriculation}</p>
        <FormModifierBus
          bus={this.props.bus}
          mettreAJourBuses={this.props.mettreAJourBuses}
        />
      </React.Fragment>
    );
    
  }

}