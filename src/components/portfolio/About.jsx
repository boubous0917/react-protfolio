import aboutImg from "../../assets/projects/about.jpg";
import { ABOUT_TEXT } from "../../data/cn";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-800">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 2 }}
        className="my-20 text-4xl text-center"
      >
        關於我
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full px-6 lg:w-1/2 lg:g-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="py-6 mx-6 text-justify maxw-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
