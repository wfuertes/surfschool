import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/main';

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<Main />, document.getElementById('app'));
