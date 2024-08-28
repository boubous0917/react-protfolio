import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import LoadingPage from "./pages/Loading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      <div className="relative overflow-x-hidden text-neutral-200 antialiased selection:bg-slate-600 selection:text-sky-100">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        </div>
        <div className="container mx-auto px-8">
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
