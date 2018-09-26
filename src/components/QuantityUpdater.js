import React, { Component } from 'react';

class QuantityUpdater extends Component {

  render() {
    const { close, title, quantity, updateQuantity } = this.props;

    return (
      <div className="modal-header">
        <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={close}></a>
        <span className="modal-title">{title}</span>
        <div style={{display:'inline'}}>
          <button
            className="btn btn-xs btn-add-add"
            onClick={() => updateQuantity("-1")}>
            <i className="icon icon-minus"></i>
          </button>
          <input
            value={quantity}
            className="form-input items-quantity"
            type="text"
            placeholder="0"
          />
          <button
            className="btn btn-xs btn-add-add"
            onClick={() => updateQuantity("+1")}>
            <i className="icon icon-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityUpdater;
