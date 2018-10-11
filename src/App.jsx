import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import ParkingsPage from "./pages/ParkingsPage";
import ParkingPage from "./pages/ParkingPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ParkingsPage} />
          <Route exact path="/:id" component={ParkingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
