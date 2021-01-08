import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import LandingPage from "./components/layout/Landing/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"

import Dashboard from "./components/admin/Dashboard/Dashboard"
import Posts from "./components/admin/Posts/Posts"
import Events from "./components/admin/Events/Events"


import "./App.css"

function App() {
  return (
    <BrowserRouter >
      <div>
        
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signIn"  component={SignIn} />
          <Route path="/signUp"  component={SignUp} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/posts"  component={Posts} />
          <Route path="/events"  component={Events} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
