import heroImg from "../../assets/ca_ht.svg";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full text-black bg-center bg-cover border-b border-slate-400 border-opacity-30">
      <div className="container flex items-center justify-center">
        <motion.img
          animate={{
            scale: [1, 0.6],
            transition: {
              duration: 2,
              //   repeat: Infinity,
              //   repeatType: "reverse",
            },
          }}
          className="relative flex items-center justify-center w-full h-screen -z-50"
          src={heroImg}
        ></motion.img>
      </div>
      {/* <Carousel /> */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: -80,
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        className="relative flex items-center justify-center w-full -z-30 h-1/2"
      >
        <p className="relative text-sm animate-bounce lg:text-md">Scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero;
