import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navigation from './core-ui/Navigation/Navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import WorksScreen from './screens/WorkScreens/WorksScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import Footer from './core-ui/Footer/Footer';
import CaseStudyAMT from './screens/WorkScreens/AMT/index';
import CaseStudyBusUp from './screens/WorkScreens/BusUp/CaseStudyBusUp';

function App() {
  return (
    <Router>
      <div className="App relative">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route exact path="/works">
            <WorksScreen />
          </Route>
          <Route path="/works/case-study-amt">
            <CaseStudyAMT />
          </Route>
          <Route path="/works/case-study-busup">
            <CaseStudyBusUp />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
