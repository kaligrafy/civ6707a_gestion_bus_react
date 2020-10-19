import React       from 'react';
import ListeDesBus from './ListeDesBus';
import '../../dist/styles.css';

class GestionnaireDeBus extends React.Component {
  
  constructor(props) {

    console.log('constructor: GestionnaireDeBus');
    super(props);

    this.state = {
      buses: [],
      blabla: null
    };

    this.mettreAJourBuses = this.mettreAJourBuses.bind(this);

  }

  componentDidMount() {
    this.mettreAJourBuses();
  }

  async mettreAJourBuses() {
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
        <h1 className="titre">Gestionnaire de bus</h1>
        <ListeDesBus 
          buses={this.state.buses}
          mettreAJourBuses={this.mettreAJourBuses}
        />
      </React.Fragment>
    );
  }

}

export default GestionnaireDeBus