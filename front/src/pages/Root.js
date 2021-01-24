import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect 
} from 'react-router-dom';


import PagesFormJustification from './FormJustification';
import PagesFormUnsubscribe from './FormUnsubscribe';
import PagesFormFeedback from './FormFeedback';

const Root = () => {
   function getFromlocalStorage(key) {
      let result = localStorage.getItem(key) ? true : false;
      return result;
   }

   let hasDataJustification = getFromlocalStorage('@formJustification');
   let hasDataUnsubscribe = getFromlocalStorage('@formUnsubscribe');
   let redirectToUrl = null;

   if(hasDataUnsubscribe) {
      redirectToUrl = '/feedback';
   } else if(hasDataJustification) {
      redirectToUrl = '/unsubscribe';
   }

   const redirectToRoute = <Redirect to={redirectToUrl} />;
   
   return (
      <Router>
         {redirectToRoute}
         <Switch>
            <Route path="/unsubscribe" component={PagesFormUnsubscribe}></Route>
            <Route path="/feedback" component={PagesFormFeedback}></Route>
            <Route path="/" component={PagesFormJustification}></Route>
         </Switch>
      </Router>
   )
};

export default Root;