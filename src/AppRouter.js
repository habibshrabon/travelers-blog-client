import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Home";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import SingleBlog from "./pages/SingleBlog";
import Write from "./pages/Write";

const AppRouter = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
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
            <PrivateRoute path="/singleBlog/:id">
              <SingleBlog />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default AppRouter;
