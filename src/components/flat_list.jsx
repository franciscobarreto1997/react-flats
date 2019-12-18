import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="flat-list">
        {this.props.flats.map((flat, index) => {
          return <Flat key={flat.lat}
                       imageUrl={flat.imageUrl}
                       price={flat.price}
                       name={flat.name}
                       priceCurrency={flat.priceCurrency}
                       selectFlat={this.props.selectFlat}
                       index={index}
                       selectedFlat={this.props.selectedFlat.name == flat.name}
                       lat={flat.lat}
                       lng={flat.lng} />
        })}
      </div>
    )
  }
}

export default FlatList;
