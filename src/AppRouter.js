import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./pages/Home/Home";
import SingleBlog from "./pages/SingleBlog";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/singleBlog/:id">
            <SingleBlog />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
