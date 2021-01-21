import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

import LandingPage from "./components/layout/Landing/LandingPage"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import NotFound from "./components/errors/NotFound"
import Unauthorized from "./components/errors/Unauthorized"
import AuthGuard from "./guards/AuthGuard"
import {Role} from "./models/role"

//Admin
import Dashboard from "./components/admin/Dashboard/Dashboard"
import Posts from "./components/admin/Posts/Posts"
import AddPost from "./components/admin/Posts/AddPost"
import Events from "./components/admin/Events/Events"
import AddEvent from "./components/admin/Events/AddEvent"
import Users from "./components/admin/Users/Users"


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
         

          {/*AuthGuard Admin */}
          <AuthGuard roles={[Role.ADMIN]} path="/dashboard"  component={Dashboard} />
          <AuthGuard roles={[Role.ADMIN]} path="/posts"  component={Posts} />
          <AuthGuard roles={[Role.ADMIN]} path="/addpost"  component={AddPost} />
          <AuthGuard roles={[Role.ADMIN]} path="/events"  component={Events} />
          <AuthGuard roles={[Role.ADMIN]} path="/addevent"  component={AddEvent} />
          <AuthGuard roles={[Role.ADMIN]} path="/users"  component={Users} />


          {/* USER */}
          <AuthGuard path="/home" roles={[Role.USER]} component={HomePage} />


          <Route  path="/404" component={NotFound} />
          <Route  path="/401" component={Unauthorized} />
          <Redirect from="*" to="/404" />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
