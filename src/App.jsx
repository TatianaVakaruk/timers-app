import React, { Component } from 'react';
import Header from './components/Header/index.jsx';
import Headline from './components/Headline/index.jsx';
import Timers from './components/Timers/index.jsx';
import Footer from './components/Footer/index.jsx';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="first__section">
          <Header />
          <Headline />
        </div>
        <div className="second__section">
          <Timers />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
