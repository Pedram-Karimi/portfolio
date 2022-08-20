import React from "react";
import "./App.css";
//components
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
//contexts
import { SideBarContextProvider } from "./context/SectionScroll";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="app">
      <SideBarContextProvider>
        <SideMenu />
        <div className="content-part">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </SideBarContextProvider>
    </div>
  );
}

export default App;
