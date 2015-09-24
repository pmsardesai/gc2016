import React from 'react';
import Router, { Route } from 'react-router';
import App from './components/App';
import Committee from './components/page/Committee';
import Contests from './components/page/Contests';
import Gallery from './components/page/Gallery';
import Home from './components/page/Home';
import PastEvents from './components/page/PastEvents';
import Schedule from './components/page/Schedule';
import Sponsors from './components/page/Sponsors';
import { createHistory } from 'history';

const browserHistory = createHistory();

React.render((
  <Router history={browserHistory}>
    <Route component={App}>
    	<Route path="/" component={Home} />
    	<Route path="/schedule" component={Schedule} />
    	<Route path="/committee" component={Committee} />
    	<Route path="/sponsors" component={Sponsors} />
    	<Route path="/contests" component={Contests} />
    	<Route path="/gallery" component={Gallery} />
    	<Route path="/pastevents" component={PastEvents} />
    </Route>
  </Router>
), document.getElementById('react-root'));
