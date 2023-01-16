
import React, { Suspense, Fragment, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Import Components
// import ScrollButton from "./components/scrollbutton";
import Loading from "./components/loading";
// Package CSS
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/animate.css";

// Template CSS Style
import "../src/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color/color-default.css"

// Import Component
const Home = lazy(() => import('./pages/Home'));
const AboutAdvisors = lazy(() => import('./pages/AboutAdvisors'));
const Refund = lazy(() => import('./pages/Refund'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Terms = lazy(() => import('./pages/Terms'));
const Blogs = lazy(() => import('./pages/Blogs'));
const MetaCourse = lazy(() => import('./pages/MetaCourse'));
const Pricing = lazy(() => import('./pages/Pricing'));

function App() {
  <Helmet>
  <title>
    BlockVerse Technologies: Upskilling Talents in Advanced Technologies{" "}
  </title>
  <meta
    name="description"
    content="BlockVerse Technologies sources, screens and upskills entry and junior level talent in advanced growth technologies and certifies them as “ready to deploy” in companies."
  />
</Helmet>;
return (
  <Fragment>

    <section className="route-section">
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/blogdetails" element={<Blogs />} />
            <Route exact path="/aboutadvisors/:id" element={<AboutAdvisors />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/orientation" element={<MetaCourse />} />
            <Route path="/pricing" element={<Pricing />} />
            
          </Routes>
        </Suspense>
      </Router>

    </section>

    {/* <ScrollButton /> */}
  </Fragment>
);
}

export default App;
