import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
