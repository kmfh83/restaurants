import React, { Component } from 'react';
import QuantityUpdater from './QuantityUpdater';
import itemsMock from '../data';

const currentItemOption = [];

class ItemModal extends Component {

  state = {
    quantity: 0
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
    this.setState({ quantity })
  }

  handleSaveItem = () => {
    console.log('handleSaveItem');
  }

  handleClickedCheckbox = (e, i, option) => {
    if (e.target.checked) {
      // add to state.cart: [ { itemID: { orders: [{},{},{}] }} ]
      console.log(`added ${option} to sandwitch #${i}`);
      this.props.updateCart(this.props.id, i, option);
    } else {
      console.log(`removed ${option} from sandwitch #${i}`);
    }
  }

  getCheckedStatus = (index, option) => {
    const selected = this.props.orders[index] ? this.props.orders[index].optionalOptions.includes(option) : false;
    return selected
  }

  getOptionsCheckboxes = (number) => {
    let rows = [];
    for (let i = 0; i < number; i++) {
      let tr = (
        <tr key={i} className={i % 2 ? 'active' : ''}>
          <td className="option-cell">{i+1}</td>
          {this.props.options.map((option, index) => (
            <td key={option} className="option-cell">
              <input type="checkbox"
                defaultChecked={this.getCheckedStatus(i, option)}
                onClick={e => this.handleClickedCheckbox(e, i, option)}
              />
              <i className="form-icon"></i>
            </td>
          ))}
        </tr>
      );

      rows.push(tr);
    }
    // if it's more than 2 rows, add "select All" row at the end
    if (rows.length > 1) {
      rows.push(
        <tr key="last">
          <td className="option-cell">All</td>
          {this.props.options.map(option => (
            <td key={option} className="option-cell">
              <input type="checkbox" onChange={e => console.log('Select all', option)}/>
              <i className="form-icon"></i>
            </td>
          ))}
        </tr>
      );
    }

    return <tbody>{rows}</tbody>;
  }

  componentDidMount = () => this.setState({ quantity: this.props.orders.length || 0 });

  render () {
    const { quantity } = this.state;
    const { close, title, options, orders } = this.props;
    console.log('my orders', orders);
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
            <div className="form-group">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="option-cell">#</th>
                    {options.map(option => (
                      <th key={option} className="option-cell">{option}</th>
                    ))}
                  </tr>
                </thead>
                {this.getOptionsCheckboxes(quantity)}
              </table>
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
