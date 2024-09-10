import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        使用技術
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <RiReactjsLine className="text-8xl text-cyan-400 p-4" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <FaNodeJs className="text-8xl text-green-500 p-4" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <SiCsharp className="text-8xl text-slate-100 p-4" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <BiLogoFlutter className="text-8xl text-sky-400 p-4" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <IoLogoFirebase className="text-8xl text-orange-300 p-4" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-slate-700 p-4"
        >
          <SiMysql className="text-8xl text-orange-600 p-4" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
