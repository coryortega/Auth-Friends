import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function NavBar() {

    return (
        <div className="Navbar">
          {/* <button onClick = {() => localStorage.clear()}>clear storage</button> */}
          <ul>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/protected">Friends List</Link>
            </p>
            <p>
              <Link to="/form">Add Friends</Link>
            </p>
            <p>
             <Link onClick = {() => localStorage.clear()} to="/login">Log Out</Link>   
            </p>
          </ul>
        </div>

    );
  }
  
  export default NavBar;