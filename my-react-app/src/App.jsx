import React from "react";
import "./App.css";
import { Header, Summary, Education, Experience, Skills, Projects } from "./Resume";

function App() {
  return (
    <div className="page-wrapper">
      <div className="resume-paper">
        <Header />
        <Summary />
        <Education />
        <Projects/>
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;