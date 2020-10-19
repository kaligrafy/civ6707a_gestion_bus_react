import React from 'react';

export default class EtiquetteDeBus extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

    };

  }

  render() {

  return (<p>{this.props.bus.id}: Immatriculation: {this.props.bus.immatriculation}</p>);
  
  }

}