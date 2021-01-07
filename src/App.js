import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import NavBar from "./components/layout/NavBar"
import LandingPage from "./components/layout/LandingPage"

import "./App.css"

function App() {
  return (
    <BrowserRouter >
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
