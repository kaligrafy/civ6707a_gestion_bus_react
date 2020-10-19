import React          from 'react';
import EtiquetteDeBus from './EtiquetteDeBus';

export default class ListeDesBus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const etiquettesDeBus = [];

    this.props.buses.forEach(function(bus, index) {
      etiquettesDeBus.push(
        <EtiquetteDeBus key={bus.id} bus={bus} />
      );
    });

    return (
      <React.Fragment>
        <h2>Liste des bus</h2>
        <div className="liste_des_bus">
          {etiquettesDeBus}
        </div>
      </React.Fragment>
    );
  }

}