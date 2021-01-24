import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

import PagesFormJustification from './FormJustification';
import PagesFormUnsubscribe from './FormUnsubscribe';

const Root = () => {
   return (
      <Router>
         <Switch>
            <Route path="/unsubscribe" component={PagesFormUnsubscribe}></Route>
            <Route path="/" component={PagesFormJustification}></Route>
         </Switch>
      </Router>
   )
};

export default Root;