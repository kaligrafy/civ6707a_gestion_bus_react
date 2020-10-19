import React          from 'react';
import EtiquetteDeBus from './EtiquetteDeBus';

export default class ListeDesBus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log('ListeDesBus buses:', this.props.buses);
    return (
      <React.Fragment>
        <h2>Liste des bus</h2>
        <div className="liste_des_bus">
          <EtiquetteDeBus />
        </div>
      </React.Fragment>
    );
  }

}