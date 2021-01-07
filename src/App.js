import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import LandingPage from "./components/layout/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"


import "./App.css"

function App() {
  return (
    <BrowserRouter >
      <div>
        
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signIn"  component={SignIn} />
          <Route path="/signUp"  component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
