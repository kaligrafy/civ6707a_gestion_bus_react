import React       from 'react';
import ListeDesBus from './ListeDesBus';

class GestionnaireDeBus extends React.Component {
  
  constructor(props) {

    console.log('constructor: GestionnaireDeBus');
    super(props);

    this.state = {
      buses: [],
      blabla: null
    };

  }

  async componentDidMount() {
    console.log('componentDidMount: GestionnaireDeBus');
    const busesJson = await fetch("http://localhost:3000/bus", {});
    const buses     = await busesJson.json();

    this.setState({
      buses: buses
    });

  }

  render() {
    console.log('render: GestionnaireDeBus');
    return (
      <React.Fragment>
        <h1>Gestionnaire de bus</h1>
        <ListeDesBus buses={this.state.buses} />
      </React.Fragment>
    );
  }

}

export default GestionnaireDeBus