import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

import ParkingsPage from "./pages/parkingsPage";
import ParkingPage from "./pages/parkingPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ParkingsPage} />
            <Route exact path="/:id" component={ParkingPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
