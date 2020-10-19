import React              from 'react';
import EtiquetteDeBus     from './EtiquetteDeBus';
import BoutonAjouterUnBus from './BoutonAjouterUnBus';

export default class ListeDesBus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const etiquettesDeBus = [];
    const busesIds        = [];

    this.props.buses.forEach(function(bus, index) {
      etiquettesDeBus.push(
        <EtiquetteDeBus
          key={bus.id}
          bus={bus}
          mettreAJourBuses={this.props.mettreAJourBuses}
        />
      );
      busesIds.push(bus.id);
    }.bind(this));

    busesIds.sort();
    const dernierId = busesIds[busesIds.length - 1];

    return (
      <React.Fragment>
        <h2>Liste des bus</h2>
        <div className="liste_des_bus">
          {etiquettesDeBus}
          <BoutonAjouterUnBus 
            dernierId={dernierId}
            mettreAJourBuses={this.props.mettreAJourBuses}
          />
        </div>
      </React.Fragment>
    );
  }

}