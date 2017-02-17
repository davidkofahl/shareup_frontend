import React from 'react'; 
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { render } from 'react-dom'
import App from './components/app';
import Home from './components/home';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('shareup')
);
