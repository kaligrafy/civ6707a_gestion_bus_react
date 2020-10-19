import React       from 'react';
import ListeDesBus from './ListeDesBus';

class GestionnaireDeBus extends React.Component {
  
  constructor(props) {

    console.log('constructor: GestionnaireDeBus');
    super(props);

    this.state = {

    };

  }

  componentDidMount() {
    console.log('componentDidMount: GestionnaireDeBus');
  }

  render() {
    console.log('render: GestionnaireDeBus');
    return (
      <React.Fragment>
        <h1>Gestionnaire de bus</h1>
        <ListeDesBus />
      </React.Fragment>
    );
  }

}

export default GestionnaireDeBus