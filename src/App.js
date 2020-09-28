import React from 'react';
import UploadView from './UploadView';
import RESTAPIView from './RESTAPIView';
import { Route, Switch } from "react-router-dom";
import MainNavbar from './MainNavbar';
import Home from './Home';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/upload' component={UploadView} exact/>
        <Route path='/rest-api' component={RESTAPIView}/>
        <Route component={MainNavbar}/>
      </Switch>
    </main>
  );
}

export default App;
