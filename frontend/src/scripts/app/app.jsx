import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

/* eslint import/no-unresolved: 0 */
import Routes from './components/routes';

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<Routes />, document.getElementById('app'));
