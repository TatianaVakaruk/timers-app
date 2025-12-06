import React, { Component } from 'react';
import Header from './Header.jsx';
import Headline from './Headline.jsx';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Headline />
      </div>
    );
  }
}
export default App;
