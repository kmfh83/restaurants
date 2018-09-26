import React, { Component } from 'react';
import QuantityUpdater from './QuantityUpdater';
import itemsMock from '../data';

const currentItemOption = [];

class ItemModal extends Component {

  state = {
    quantity: 0,
    qq: [],
    savedItems:  [
      { item1: [ "sauce1", "sauce4", "grilled"] },
      { item2: [ "sauce1", "sauce4", "grilled"] },
    ]
  }

  updateQuantity = (value) => {
    let { quantity } = this.state;
    if (value === "+1") {
      quantity = quantity + 1
    } else if (value === "-1" && quantity > 0) {
      quantity = quantity - 1
    } else {
      console.log('Error value');
    }
    this.setState({ quantity, qq: new Array(quantity) })
    // const currentQuantity = this.state.quantity;
    // if (value === "+1") {
    //   this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    // } else if (value === "-1" && currentQuantity > 0) {
    //   this.setState(({ quantity }) => ({ quantity: quantity - 1 }));
    // } else {
    //   console.log('Error value');
    // }
  }

  itemCountRows = () => {

  }

  handleSaveItem = () => {
    console.log('handleSaveItem');
  }

  getOptionsChecks = (number) => {
    let rows = [];
    for (let i = 0; i < number; i++) {
      let tr = (<tr key={i} className={i % 2 ? 'active' : ''}>
        <td className="option-cell">{i+1}</td>
        {this.props.options.map(option => (
          <td key={option} className="option-cell">
            <input type="checkbox"/>
            <i className="form-icon"></i>
          </td>
        ))}
      </tr>);

      rows.push(tr);
    }
    if (rows.length > 1) {
      rows.push(
        <tr>
          <td className="option-cell">All</td>
          {this.props.options.map(option => (
            <td key={option} className="option-cell">
              <input type="checkbox" onChange={e => console.log('sss', e)}/>
              <i className="form-icon"></i>
            </td>
          ))}
        </tr>
      );

    }
    return <tbody>{rows}</tbody>;

  }

  render () {
    const { quantity } = this.state;
    const { close, title, options } = this.props;

    return (

      <div className="modal active" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container">

          <QuantityUpdater
            title={title}
            quantity={quantity}
            updateQuantity={this.updateQuantity}
            close={close}
          />

          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">
                  <div className="columns">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="option-cell">#</th>
                          {options.map(option => (
                            <th key={option} className="option-cell">{option}</th>
                          ))}
                        </tr>
                      </thead>
                      {this.getOptionsChecks(quantity)}
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn m-1" onClick={close}>Cancel</button>
            <button className="btn btn-primary m-1" onClick={this.handleSaveItem}>Save and close</button>
          </div>
        </div>
      </div>
    )
  }
}
export default ItemModal;
