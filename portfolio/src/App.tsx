import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import PhysicsLab from "./components/PhysicsLab";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <PhysicsLab />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
