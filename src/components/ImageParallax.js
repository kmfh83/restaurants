import React, { Component } from 'react';


class ImageParallax extends Component {

  render() {
    return (
      <div className="parallax">
        <div className="parallax-top-left" tabIndex="1"></div>
        <div className="parallax-top-right" tabIndex="2"></div>
        <div className="parallax-bottom-left" tabIndex="3"></div>
        <div className="parallax-bottom-right" tabIndex="4"></div>
        <div className="parallax-content">
          <div className="parallax-back padd-10">
            <img src={this.props.image} className="item-image" alt={this.props.title}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageParallax;
