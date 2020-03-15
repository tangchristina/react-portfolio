import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return(
  <Router>
  <div>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio}/>
    </Switch>
  </div>
</Router>
);
}

export default App;

