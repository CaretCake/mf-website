import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Nav />
      <Switch>
           <Route path='/' component={Home} exact />
           <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </main>
  );
}