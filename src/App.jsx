import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Experience from "../src/components/Experience";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Projects from "../src/components/Projects";
import Technologies from "../src/components/Technologies";

export default function App() {
  return (
    <>
      {/* <LoadingPage /> */}
      <div className="relative overflow-x-hidden antialiased text-neutral-200 selection:bg-slate-600 selection:text-sky-100">
        <div className="fixed top-0 w-full h-full -z-10">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        </div>
        <div className="container px-8 mx-auto">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
