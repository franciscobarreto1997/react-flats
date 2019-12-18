import React, { Component } from 'react';

import flats from '../../data/flats.js';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flats: flats
    }
  }


  render(){
    return(
      <div>
          <FlatList flats={this.state.flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    )
  }
}

export default App;
