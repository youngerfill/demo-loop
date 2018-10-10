import ReactDOM from 'react-dom';
import * as h from 'react-hyperscript-helpers';
import * as c from './components';

const names = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven" ]

ReactDOM.render( h.h( c.List2D_map, { names: names } ), document.getElementById('root') );
