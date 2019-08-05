import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';

import Container from './components/Container';

// AppContainer is a necessary wrapper component for HMR

// const render = Component => ReactDOM.render(<Component />, document.getElementById('root'));

// render(App);
ReactDOM.render(<Container />, document.getElementById('root'));
// document.body.addEventListener('click', () => render(App));

