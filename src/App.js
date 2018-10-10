
//import React from 'react';
import * as h from 'react-hyperscript-helpers';

const App = ({names}) =>
{
    return [
            h.div("TOP"),
            names.map(name => h.div(name)),
            h.div("BOTTOM")
        ]
}

export default App;
