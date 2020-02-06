import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Fasilitas from "./components/Fasilitas.js/Fasilitas";
import ComingSoon from "./components/ComingSoon";

function App() {
  AOS.init();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/tentang" component={About} />
          <Route path="/fasilitas" component={Fasilitas} />
          <Route path="/berita-dan-promosi" component={ComingSoon} />
          <Route path="/kontak" component={ComingSoon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
