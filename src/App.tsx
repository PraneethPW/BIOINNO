import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutKare from "./components/AboutKare";
import AboutASU from "./components/AboutASU";
import AboutIAAM from "./components/AboutIAAM";
import Theme from "./components/Theme";
import ThrustAreas from "./components/ThrustAreas";
import ImportantDates from "./components/ImportantDates";
import Registration from "./components/Registration";
import Accommodation from "./components/Accommodation";
import OrganizingCommittee from "./components/OrganizingCommitte";
import Venue from "./components/Venue";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="about-kare" className="section">
          <AboutKare />
        </section>
        <section id="about-asu" className="section">
          <AboutASU />
        </section>
        <section id="about-iaam" className="section">
          <AboutIAAM />
        </section>
        <section id="theme" className="section">
          <Theme />
        </section>
        <section id="thrust-areas" className="section">
          <ThrustAreas />
        </section>
        <section id="dates" className="section">
          <ImportantDates />
        </section>
        <section id="registration" className="section">
          <Registration />
        </section>
        <section id="accommodation" className="section">
          <Accommodation />
        </section>
        <section id="committee" className="section">
          <OrganizingCommittee />
        </section>
        <section id="venue" className="section">
          <Venue />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
