import React, { Component } from 'react';
import Item from './components/Item';
import itemsMock from './data';
import Header from './components/Header';

const itemCSSclasses = "column col-xs-12 col-sm-12 col-md-11 col-lg-9 col-xl-8 col-6 col-mx-auto";

class App extends Component {
  state = {
    menu: itemsMock || [],
    cart: [
      { itemId: 1,
        orders: [
          {
            // mainOptions: [],
            optionalOptions: ['shata', 'oil', 'filfil aswad']
          },
          {
            // mainOptions: [],
            optionalOptions: ['filfil aswad', 'lemon asfar', 'sada', 'fromage']
          },
          {
            // mainOptions: [],
            optionalOptions: ['shata', 'oil', 'filfil aswad']
          },
        ]
      }, // item 1
      { itemId: 2,
        orders: [
          {
            // mainOptions: [],
            optionalOptions: ['fromage']
          },
          {
            // mainOptions: [],
            optionalOptions: ['shata']
          },
        ]
      }, // item 2

    ]
  }

  // function to update cart
  updateCart = (itemId, index, option) => {

  }

  itemOrders = (itemId) => {
    const found = this.state.cart.find(order => order.itemId === itemId);
    return found ? found.orders : {};
  }

  render() {

    return (
      <div className="App">

         <header className="navbar">
          <Header />
         </header>

        <div className="container">
          <div className="columns">
            <div className={itemCSSclasses}>
              {this.state.menu.map(item => <Item key={item.id} {...item} updateCart={this.updateCart} orders={this.itemOrders(item.id)}/>)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
