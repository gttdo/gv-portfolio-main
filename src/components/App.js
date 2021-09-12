import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/core-ui/ScrollToTop/ScrollToTop';


import Navigation from './core-ui/Navigation/Navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import WorksScreen from './screens/WorkScreens/WorksScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import Footer from './core-ui/Footer/Footer';
import CaseStudyAMT from './screens/WorkScreens/AMT/index';
import CaseStudyMagi from './screens/WorkScreens/Magi/index';
import CaseStudyBusUp from './screens/WorkScreens/BusUp/index';
import CaseStudyLocalEyez from './screens/WorkScreens/LocalEyez/index';

function App() {
  return (

    <div className="App relative">
      <Router>
        <Navigation />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>

          <Route path="/amt">
            <CaseStudyAMT />
          </Route>
          <Route path="/busup">
            <CaseStudyBusUp />
          </Route>
          <Route path="/magi">
            <CaseStudyMagi />
          </Route>
          <Route path="/localeyez">
            <CaseStudyLocalEyez />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <HashRouter>
        <Route exact path="/#featuredProjects">
          <WorksScreen />
        </Route>
      </HashRouter>
    </div>

  );
}

export default App;
