import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CategoryStore from  "./Stores/store"
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'

//let CategoryStore = new CategoryStore()

// const stores = {CategoryStore }
// ReactDOM.render(<Provider {... stores}>
//         <App />
//     </Provider>, document.getElementById('root'));

// ReactDOM.render(
//         <App />
//     <document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:ttps://bit.ly/CRA-PWA
serviceWorker.unregister(); 
