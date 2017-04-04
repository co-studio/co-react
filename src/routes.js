import React from 'react';
import { Router, Route } from 'react-router';

import Landing from './pages/Landing/Landing';
import Contact from './pages/Contact/Contact';

const Routes = (props) => (
  <Router {...props} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/contact" component={Contact} />
    <Route path="*" component={Landing} />
  </Router>
)

export default Routes
