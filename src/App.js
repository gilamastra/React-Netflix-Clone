import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = "";
  return (
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route to="/">
            <div className="app">
              <HomeScreen />
            </div>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
