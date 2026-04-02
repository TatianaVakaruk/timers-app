import React from 'react';
import Header from './components/Header/index.jsx';
import Headline from './components/Headline/index.jsx';
import Timers from './components/Timers/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {
  return (
    <div className="page">
      <section className="first__section">
        <Header />
        <Headline />
      </section>
      <section className="second__section">
        <Timers />
      </section>
      <Footer />
    </div>
  );
}

export default App;
