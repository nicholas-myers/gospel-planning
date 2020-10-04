import React from "react";
import Journal from "../Journal/Journal";
import Generation from "../Generation/Generation";
import { Link, Route } from "react-router-dom";
function Home() {
  return (
    <div>
      <header>
        <h1>Myers Family History</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/generation">Generation</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </nav>
      </header>
      <Route path="/generation">
          <Generation />
      </Route>
      <Route path="/journal">
          <Journal />
      </Route>
    </div>
  );
}

export default Home;
