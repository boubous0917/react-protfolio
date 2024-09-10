import { HERO_CONTENT } from "../../data/cn";
import profilePic from "../../assets/boubous.jpg";
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
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
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
              <p className="pb-2 mx-2 text-2xl font-thin tracking-tighter lg:mt-16 lg:text-2xl">
                PoLung Tzheng
              </p>
            </motion.h1>
            <motion.span
              variants={animation(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl font-bold tracking-tighter text-transparent bg-gradient-to-r from-pink-200 via-sky-700 to-purple-300 bg-clip-text"
            >
              前端工程師
            </motion.span>
            <motion.p
              variants={animation(0.8)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-light tracking-tighter text-justify"
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
