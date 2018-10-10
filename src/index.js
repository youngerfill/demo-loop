import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const names = [ "One", "Two", "Three", "Four", "Five" ]

ReactDOM.render(<App names={names}/>, document.getElementById('root'));
