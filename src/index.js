import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Restaurants from './pages/restaurants'
import Restaurant from './pages/restaurant'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/restaurant/:resId" component={Restaurant} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
