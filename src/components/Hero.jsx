import { HERO_CONTENT } from "../data/cn";
import profilePic from "../assets/boubous.jpg";
import { motion } from "framer-motion";

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animation(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-bold tracking-tighter lg:mt-16 lg:text-8xl"
            >
              曾柏龍
              <p className="mx-2 pb-2 lg:mt-16 lg:text-2xl text-2xl font-thin tracking-tighter">
                PoLung Tzheng
              </p>
            </motion.h1>
            <motion.span
              variants={animation(0.5)}
              initial="hidden"
              animate="visible"
              className="font-bold bg-gradient-to-r from-pink-200 via-sky-700 to-purple-300 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              前端工程師
            </motion.span>
            <motion.p
              variants={animation(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-justify font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="rounded-2xl"
              src={profilePic}
              alt="Po Lung Tzheng"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
