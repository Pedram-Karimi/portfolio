import "./App.css";
import "./responsiveStyles.css";
//components
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
//contexts
import { SideBarContextProvider } from "./context/SectionScroll";
import Contact from "./components/Contact/Contact";
import HeaderMobile from "./components/header/HeaderMobile";
import { PhoneSideMenuProvider } from "./context/PhoneSideMenu";
function App() {
  return (
    <div className="app">
      <SideBarContextProvider>
        <>
          <PhoneSideMenuProvider>
            <>
              <SideMenu />
              <HeaderMobile />
            </>
          </PhoneSideMenuProvider>
          <div className="content-part">
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
        </>
      </SideBarContextProvider>
    </div>
  );
}

export default App;
