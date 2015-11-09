import React from 'react';
import Router, { Route } from 'react-router';
import App from './components/App';
import Committee from './components/Page/Committee';
import ComingSoon from './components/Page/ComingSoon';
import Contests from './components/Page/Contests';
import Gallery from './components/Page/Gallery';
import Hotel from './components/Page/Hotel';
import Home from './components/Page/Home';
import PastEvents from './components/Page/PastEvents';
import Registration from './components/Page/Registration';
import Schedule from './components/Page/Schedule';
import Sponsors from './components/Page/Sponsors';
import { createHistory } from 'history';

const browserHistory = createHistory();

React.render((
  <Router history={browserHistory}>
    <Route component={App}>
    	<Route path="/" component={Home} />
    	<Route path="/schedule" component={Schedule} />
        <Route path="/hotel" component={Hotel} />
    	<Route path="/committee" component={Committee} />
    	<Route path="/sponsors" component={Sponsors} />
    	<Route path="/contests" component={Contests} />
    	<Route path="/gallery" component={Gallery} />
    	<Route path="/pastevents" component={PastEvents} />
        <Route path="/register" component={Registration} />
        <Route path="/comingsoon" component={ComingSoon} />
    </Route>
  </Router>
), document.getElementById('react-root'));
