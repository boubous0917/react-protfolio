import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import LoadingPage from "./pages/Loading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

// token -> 27 sep 2024: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
export default function App() {
  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   tl.to(".wrapper", {
  //     opacity: 0,
  //     duration: 1,
  //     delay: 1,
  //   });
  // });
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
