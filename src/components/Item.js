import React, { Component } from 'react';
import items from './data';

class Item extends Component {
  render() {
    return (
      <div className="container">
        {items.map((item)=>
          <div className="tile">
            <div className="tile-icon">
              <div className="example-tile-icon">
                <img className="item-img" src={item.image}/>
              </div>
            </div>
            <div className="tile-content">
              <div className="tile-title">{item.title}</div>
              <div className="tile-subtitle text-gray">{item.description}</div>
            </div>
            <div className="tile-action">
              <button className="btn btn-link">
                {item.price} S.R.
                {/* <i className="icon icon-more-vert"></i> */}
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Item;
