import React  from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

import PagesFormJustification from './FormJustification/Justification';
import PagesFormUnsubscribe from './FormUnsubscribe/Unsubscribe';

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