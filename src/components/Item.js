import React, { Component } from 'react';
import items from './data';
import ItemModal from './ItemModal';

class Item extends Component {

  state = {
    modalState: '',
    addedItems: 0,
    currentItemOption: []
  }

  handleAddITem = (item) => {
    this.setState({ modalState: 'active', currentItemOption: item.options })
  }

  closeModal = () => {
    // this.setState({ modalState: '' });
    this.setState({ modalState: '' });
  }

  changeQuantity = (option) => {
    this.setState(({ addedItems }) => {
      switch (option) {
        case 'add': return { addedItems: addedItems + 1 };
        case 'remove': return addedItems ? ({ addedItems: addedItems - 1 }) : {};
        default:
        throw new Error(`Unknown option: ${option}`);
      }
    }
  );
}


itemCountRows (itemsCount) {
  const { currentItemOption } = this.state;
  let rows = [];

  for (var i = 0; i < itemsCount; i++) {
    rows.push((
      <tr className={i % 2 ? 'active' : ''}>
      <td className="option-cell">{i+1}</td>
      {currentItemOption.map(option =>
        <td className="option-cell" key={option}>
        <input type="checkbox"/>
        <i className="form-icon"></i>
        </td>
      )}
      <td>X</td>
      </tr>))
    }

    if (rows.length > 1) {
      rows.push(<tr>
        <th>All</th>
        {currentItemOption.map(option =>
          <th className="option-cell" key={option}>
          <input type="checkbox"/>
          </th>
        )}
        <th>del all</th>
        </tr>)
      }
      return rows
    }

    updateQuanitity (e) {
      this.setState({ addedItems: parseInt(e.target.value, 10)})
    }

    render() {
      const { modalState, addedItems, currentItemOption } = this.state;

      return (

        // start index page
        <div>
        {items.map((item) =>
          <div key={item.id} className="flex-container perfect-centering item-row box effect6">
          <div className="perfect-centering">
          <img src={item.image} className="item-image" alt={item.title}/>
          </div>
          <div className="flex-container-col item-details border-line-3px ">
          <h2>{item.title}</h2>
          <div className="font-description">{item.description}</div>
          <div className="price font-price">{item.price}</div>
          </div>
          <div className="flex-container-col">

          {/* btn withe price for xs screen */}
          <button
          className="btn-withe-price btn-lg btn-add-edit perfect-centering"
          onClick={() => this.handleAddITem(item)}
          >{item.price} S.R. add</button>

          <button
          className="btn btn-lg btn-add-edit perfect-centering"
          onClick={() => this.handleAddITem(item)}
          >add</button>
          </div>



          <div className={`modal ${modalState}`} id="modal-id">
          <a href="#close" className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">

          <div className="modal-header">
          <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={this.closeModal}></a>

          <span className="modal-title">Modal title</span>
          <div style={{display:'inline'}}>

          <button
          className="btn btn-xs btn-add-add"
          onClick={() => this.changeQuantity("remove")}>
          <i className="icon icon-minus"></i>
          </button>
          <input
          value={addedItems}
          className="form-input items-quantity"
          type="text"
          placeholder="0"
          onChange={e => this.updateQuanitity(e)}
          />
          <button
          className="btn btn-xs btn-add-add"
          onClick={() => this.changeQuantity("add")}>
          <i className="icon icon-plus"></i>
          </button>
          </div>
          </div>



          <div className="modal-body">
          <div className="content">
          <form>
          <div className="form-group">
          <div className="columns">

          <table className="table table-striped table-hover">
          <thead>
          <tr>
          <th className="option-cell">#</th>
          {currentItemOption.map(option => <th className="option-cell" key={option}>{option}</th>).concat(<th></th>)}
          </tr>
          </thead>
          <tbody >

          {this.itemCountRows(addedItems)}

          </tbody>
          </table>
          </div>
          </div>
          </form>
          </div>
          </div>

          <div className="modal-footer">
          <button className="btn m-1">Cancel</button>
          <button className="btn btn-primary m-1">Save and close</button>
          </div>
          </div>
          </div> {/* end modal*/}
          </div>
        )}



        </div>
      )
    }
  }

  export default Item;
