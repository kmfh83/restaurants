import React, { Component } from 'react';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="navbar">

          <section className="navbar-section">
            <a href="/" className="btn btn-link">Twitter</a>
            <a href="/" className="btn btn-link">GitHub</a>
          </section>

        </header>
        <div className="container">
          <div className="columns">
            <div className="column col-sm-12 col-md-11 col-lg-9 col-xl-8 col-6 col-mx-auto">
              <Item />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
