import About from "../app/components/About";
import Resume from "../app/components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="bg-black">
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
