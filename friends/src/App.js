import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import AddFriendsForm from "./components/AddFriendsForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <PrivateRoute path="/protected">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/form">
            <AddFriendsForm />
          </PrivateRoute>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;