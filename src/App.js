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

  //Posts
  import Posts from "./components/admin/Posts/Posts"
  import AddPost from "./components/admin/Posts/AddPost"
  import EditPost from "./components/admin/Posts/EditPost"

  //Events
  import Events from "./components/admin/Events/Events"
  import AddEvent from "./components/admin/Events/AddEvent"
  import EditEvent from "./components/admin/Events/EditEvent"

  //Users
  import Users from "./components/admin/Users/Users"
  import AddUser from "./components/admin/Users/AddUser"
  import EditUser from "./components/admin/Users/EditUser"



//User
  import HomePage from "./components/user/Home/HomePage"
  import PostDetail from "./components/user/PostDetail/PostDetail"
  import EventPage from "./components/user/Events/EventPage"
  import Profile from "./components/user/Profile/Profile"



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
          <AuthGuard roles={[Role.ADMIN]} path="/adduser"  component={AddUser} />
          <Route path="/edituser/:id"  component={EditUser} />
          <Route path="/editpost/:id"  component={EditPost} />
          <Route path="/editevent/:id"  component={EditEvent} />


          {/* USER */}
          <AuthGuard path="/home" roles={[Role.USER]} component={HomePage} />
          <AuthGuard path="/profile" roles={[Role.USER]} component={Profile} />
          <Route path="/post/:id"  component={PostDetail} />
          <AuthGuard path="/coming-events" roles={[Role.USER]} component={EventPage} />

          <Route  path="/404" component={NotFound} />
          <Route  path="/401" component={Unauthorized} />
          <Redirect from="*" to="/404" />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
