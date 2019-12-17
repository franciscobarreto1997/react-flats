import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {

  render(){
    return(
      <div className="flat">
        {this.props.flats.map((flat, index) => {
          return <Flat key={index} imageUrl={flat.imageUrl} price={flat.price} name={flat.name} />
        })}
      </div>
    )
  }
}

export default FlatList;
