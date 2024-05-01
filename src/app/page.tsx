import About from "@/src/components/About";
import Resume from "@/src/components/Resume";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
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
