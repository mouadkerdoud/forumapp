import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import LandingPage from "./components/layout/Landing/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"

//Admin
import Dashboard from "./components/admin/Dashboard/Dashboard"
import Posts from "./components/admin/Posts/Posts"
import AddPost from "./components/admin/Posts/AddPost"
import Events from "./components/admin/Events/Events"
import AddEvent from "./components/admin/Events/AddEvent"


//User
import HomePage from "./components/user/Home/HomePage"



import "./App.css"

function App() {
  return (
    <BrowserRouter >
      <div>
        
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signIn"  component={SignIn} />
          <Route path="/signUp"  component={SignUp} />

          {/* Admin */}
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/posts"  component={Posts} />
          <Route path="/addpost"  component={AddPost} />
          <Route path="/events"  component={Events} />
          <Route path="/addevent"  component={AddEvent} />


          {/* USER */}
          <Route path="/home" component={HomePage} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
