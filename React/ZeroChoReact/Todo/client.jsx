import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import TodoHooks from './TodoHooks.jsx';

const Hot = hot(TodoHooks);

ReactDOM.render(<Hot />, document.querySelector('#root'));