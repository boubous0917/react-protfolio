import About from "../components/portfolio/About";
import Contact from "../components/portfolio/Contact";
import Experience from "../components/portfolio/Experience";
import Hero from "../components/portfolio/Hero";
import Navbar from "../components/portfolio/Navbar";
import Projects from "../components/portfolio/Projects";
import Technologies from "../components/portfolio/Technologies";

const MyPortfolio = () => {
  return (
    <>
      <div className="relative overflow-x-hidden antialiased text-neutral-200 selection:bg-transparent selection:text-orange-300">
        <div className="fixed top-0 w-full h-full -z-10">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        </div>
        <div className="container px-8 mx-auto">
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <Technologies />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
