import React, { Component } from 'react';
import items from './data';
import ImageParallax from './ImageParallax';

class Item extends Component {
  render() {
    return (

      <div className="">

        {items.map((item)=>

        <div className="flex-container perfect-centering item-border-3px">
          <div className="perfect-centering">
            <ImageParallax image={item.image} title={item.title}/>
          </div>
          <div className="flex-container-col item-details border-line-3px ">
            <div className="font-title">{item.title}</div>
            <div className="font-description">{item.description}</div>
            <div className="font-price">{item.price}</div>
          </div>
          <button className="btn btn-lg btn-add-edit perfect-centering font-description">add/edit</button>
        </div>

      )}

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
