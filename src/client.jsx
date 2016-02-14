import React from 'react';
import Router, { Route } from 'react-router';
import App from './components/App';
import Committee from './components/Page/Committee';
import ComingSoon from './components/Page/ComingSoon';
import Concert from './components/Page/Concert';
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
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route component={App}>
    	<Route path="/" page="home" component={Home} />
    	<Route path="/schedule" page="schedule" component={Schedule} />
        <Route path="/hotel" page="hotel" component={Hotel} />
        <Route path="/concert" page="concert" component={Concert} />
    	<Route path="/committee" page="committee" component={Committee} />
    	<Route path="/sponsors" page="sponsors" component={Sponsors} />
    	<Route path="/contests" page="contests" component={Contests} />
    	<Route path="/gallery" page="gallery" component={Gallery} />
    	<Route path="/pastevents" page="pastevents" component={PastEvents} />
        <Route path="/register" page="register" component={Registration} />
        <Route path="/comingsoon" page="comingsoon" component={ComingSoon} />
    </Route>
  </Router>
), document.getElementById('react-root'));
