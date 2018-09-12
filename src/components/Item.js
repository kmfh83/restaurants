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
              <img src={item.image} className="item-image" alt={item.title}/>

              {/* <ImageParallax image={item.image} title={item.title}/> */}
            </div>
            <div className="flex-container-col item-details border-line-3px ">
              <h2 class="item-title">{item.title}</h2>
              <div className="font-description">{item.description}</div>
              <div className="font-price">{item.price} S.R.</div>
            </div>

            <div className="perfect-centering">
              <button className="btn btn-lg btn-add-edit perfect-centering font-description">add/edit</button>
            </div>

          </div>

        )}

        {/* {items.map((item)=>
          <div className="mtam" key={item.id}>
          <div className="flex-container">
          <div className="perfect-centering">
          <div className="mtam-icon">
          <div className="example-mtam-icon">
          <ImageParallax image={item.image} title={item.title} />
        </div>
      </div>
    </div>
    <div className="flex-container-col item-details">
    <div className="mtam-title padding-top-3">{item.title}</div>
    <div className="mtam-subtitle text-gray ptb-5">{item.description}</div>
    <span className="">
    {item.price} S.R.
  </span>
</div>
<div className="perfect-centering">
<div className="">
<span className="">
ADD/EDIT
</span>
</div>
</div>
</div>

</div>
)} */}
</div>
)
}
}

export default Item;
