import React, { Component } from 'react';
import ItemModal from './ItemModal';

class Item extends Component {

  state = {
    modalState: undefined,
  }

  handleAddITem = () => this.setState({ modalState: 'active' });

  closeModalState = () => this.setState({ modalState: undefined });

  render() {
    const { modalState } = this.state;
    const { id, image, title, description, price, options } = this.props;

    return (
      <div key={id} className="flex-container perfect-centering item-row box effect6">
        <div className="perfect-centering">
          <img src={image} className="item-image" alt={title}/>
        </div>
        <div className="flex-container-col item-details border-line-3px ">
          <h2>{title}</h2>
          <div className="font-description">{description}</div>
          <div className="price font-price">{price} SR</div>
        </div>
        <div className="flex-container-col">
          <button
            className="btn-withe-price btn-lg btn-add-edit perfect-centering"
            onClick={() => this.handleAddITem()}
            >{price} SR add
          </button>
          <button
            className="btn btn-lg btn-add-edit perfect-centering"
            onClick={() => this.handleAddITem()}
            >add
          </button>
        </div>
        {modalState && <ItemModal close={this.closeModalState} {...this.props} />}
      </div>
    )
  }
}

export default Item;
