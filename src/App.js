import React, { Component } from 'react';
import Item from './components/Item';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header> */}
      <header className="navbar">
        <section className="navbar-section">
          <a href="/" className="btn btn-link">Docs</a>
          <a href="/" className="btn btn-link">Examples</a>
        </section>
        <section className="navbar-center">
          <p>LOGOOOOOO</p>
        </section>
        <section className="navbar-section">
          <a href="/" className="btn btn-link">Twitter</a>
          <a href="/" className="btn btn-link">GitHub</a>
        </section>
      </header>



      <div className="container">

        <div className="columns">
          <div className="column col-xs-12 col-md-10 col-lg-8 col-xl-7 col-6 col-mx-auto">

              <Item />

          </div>
        </div>

        
      </div>

    </div>
  );
}
}

export default App;
