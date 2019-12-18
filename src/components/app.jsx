import React, { Component } from 'react';

import flats from '../../data/flats.js';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    }
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }


  render(){
    return(
      <div>
          <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} />
        <div className="map-container">
          <SimpleMap center={{lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng}} zoom={13}/>
        </div>
      </div>
    )
  }
}

export default App;
