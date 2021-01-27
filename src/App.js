import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <NavBar />
      <Switch>
           <Route exact path='/' component={HomePage} />
           <Route path='/portfolio' component={PortfolioPage} />
      </Switch>
      <Footer />
    </main>
  );
}