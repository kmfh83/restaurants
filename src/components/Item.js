import React, { Component } from 'react';
import items from './data';
import ImageParallax from './ImageParallax';

class Item extends Component {
  render() {
    return (

      <div className="">



        <div className="flex-container">
          <div className="perfect-centering">img</div>
          <div className="flex-container-col item-details">
            <div>title!</div>
            <div>des</div>
            <div>price</div>
          </div>
          <div className="perfect-centering">add/edit</div>
        </div>

        {/* {items.map((item)=>
          <div className="mtam" key={item.id}>
            <div className="mtam-icon">
              <div className="example-mtam-icon">
                <ImageParallax image={item.image} title={item.title} />
              </div>
            </div>
            <div className="mtam-content">
              <div className="mtam-title padding-top-3">{item.title}</div>
              <div className="mtam-subtitle text-gray ptb-5">
                {item.description}</div>
                <div className="">
                  <span className="">
                    {item.price} S.R.
                  </span>
                </div>
            </div>
            <div className="">
              <span className="">
                ADD/EDIT
              </span>
            </div>
          </div>
        )} */}
      </div>
    )
  }
}

export default Item;
