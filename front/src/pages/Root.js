import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect 
} from 'react-router-dom';


import PagesFormJustification from './FormJustification';
import PagesFormUnsubscribe from './FormUnsubscribe';

const Root = () => {
   function getFromlocalStorage(key) {
      let result = localStorage.getItem(key) ? true : false;
      return result;
   }

   let hasData = getFromlocalStorage('@formJustification');
   let redirectToUrl = hasData ? '/unsubscribe' : null;

   const redirectToRoute = <Redirect to={redirectToUrl} />;
   
   return (
      <Router>
         {redirectToRoute}
         <Switch>
            <Route path="/unsubscribe" component={PagesFormUnsubscribe}></Route>
            <Route path="/" component={PagesFormJustification}></Route>
         </Switch>
      </Router>
   )
};

export default Root;