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
    console.log('item.options', item.options);
    this.setState({ modalState: 'active', currentItemOption: item.options })
}

closeModal = () => {
  // this.setState({ modalState: '' });
  this.setState({ modalState: '' });
}

changeQuantity = (option) => {
  this.setState((prevState) => {
    let newCount = 0
    if (option === 'add') {
      newCount = prevState.addedItems + 1;
    }
    if (option === 'remove' && prevState.addedItems > 0) {
      newCount = prevState.addedItems - 1;
    }
    return ({ addedItems: newCount });
  }
);
}

render() {
  const { modalState, addedItems, currentItemOption } = this.state;

  return (

    <div>

      {items.map((item) =>
        <div key={item.id} className="flex-container perfect-centering item-row box effect6">
          <div className="perfect-centering">
            <img src={item.image} className="item-image" alt={item.title}/>
          </div>
          <div className="flex-container-col item-details border-line-3px ">
            <h2>{item.title}</h2>
            <div className="font-description">{item.description}</div>
            <div className="font-price">{item.price}</div>
          </div>
          <button
            className="btn btn-lg btn-add-edit perfect-centering font-description"
            onClick={() => this.handleAddITem(item)}
            >add</button>

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
                      style={{width:'40px', display:'inline'}}
                      className="form-input"
                      type="text"
                      placeholder="0"/>
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

                            {
                              for (var i = 0; i < addedItems; i++) {
                                array[i]
                              currentItemOption.map(option =>
                              <div className="column">
                                <label className="form-checkbox"> {option}
                                  <input type="checkbox"/>
                                  <i className="form-icon"></i>
                                </label>
                              </div>
                            )}
                          }


                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="modal-footer">
                    ...
                  </div>
                </div>
              </div>

            </div>
          )}



        </div>
      )
    }
  }

  export default Item;
