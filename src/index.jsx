import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.scss';
import '../src/components/Headline/index.scss';
import '../src/components/Header/index.scss';
import '../src/components/Timer/index.scss';
import '../src/components/TimerForm/index.scss';
import '../src/components/Timers/index.scss';
import '../src/components/Footer/index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
