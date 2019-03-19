import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormComponent from "./random.js";
// import gridHooks from "./GridHooks.js"
import Grid from "./grid.js"
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import GridContainer from './GridContainer';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/idk" component={FormComponent} />
        <Route path="/grid-hooks" component={GridContainer}/>
        <Route path="/grid" component={Grid}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
