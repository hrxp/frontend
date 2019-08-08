import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "../src/pages/Login/Login";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage";
import './scss/Main.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/404" exact component={NotFoundPage} />
    </Router>
  );
};

export default App;
