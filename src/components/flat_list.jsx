import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {

  render(){
    return(
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.lat}
                       imageUrl={flat.imageUrl}
                       price={flat.price}
                       name={flat.name}
                       priceCurrency={flat.priceCurrency} />
        })}
      </div>
    )
  }
}

export default FlatList;
