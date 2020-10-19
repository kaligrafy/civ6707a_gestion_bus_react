import React       from 'react';
import ListeDesBus from './ListeDesBus';

class GestionnaireDeBus extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <React.Fragment>
        <h1>Gestionnaire de bus</h1>
        <ListeDesBus />
      </React.Fragment>
    );
  }

}

export default GestionnaireDeBus