import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AdminSidebar from "./pages/AdminSidebar";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageBlogs from "./pages/Dashboard/ManageBlogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import SingleBlog from "./pages/SingleBlog";
import Write from "./pages/Write";

const AppRouter = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/write">
              <Write />
            </Route>
            <Route path="/manageBlogs">
              <ManageBlogs />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/dashboard">
              <AdminSidebar />
            </Route>
            <Route path="/singleBlog/:id">
              <SingleBlog />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default AppRouter;
