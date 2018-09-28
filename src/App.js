import React, { Component } from 'react';
import Item from './components/Item';
import itemsMock from './data';
import Header from './components/Header';

const itemCSSclasses = "column col-xs-12 col-sm-12 col-md-11 col-lg-9 col-xl-8 col-6 col-mx-auto";

class App extends Component {
  state = {
    menu: itemsMock || [],
    cart: [
      { itemId: 3, options: [ "filfil", "shata" ] },
      { itemId: 3, options: [ "shata" ] },
      { itemId: 5, options: [ "cheese", "shata", "extra meat" ] }
    ]
  }

  render() {

    return (
      <div className="App">

        {/* TODO kmfh: make this a separate <Header> component*/}
        <header className="navbar">
          <Header />
        </header>

        <div className="container">
          <div className="columns">
            <div className={itemCSSclasses}>
              {this.state.menu.map(item => <Item key={item.id} {...item} />)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
