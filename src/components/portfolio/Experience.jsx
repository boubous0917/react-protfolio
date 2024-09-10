import React from "react";
import { EXPERIENCES } from "../../data/cn";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4 border-b border-neutral-800">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center"
      >
        工作經歷
      </motion.h2>
      <div>
        {EXPERIENCES.map((expreience, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/6 lg:text-end"
            >
              <p className="mb-2 text-md text-neutral-400">{expreience.year}</p>
              <h6 className="mb-2 font-semibold">{expreience.role}</h6>
              <span className="text-purple-200 text-md">
                {expreience.company}
              </span>
            </motion.div>
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="lg:mx-6 lg:border-l lg:border-neutral-100 lg:w-1/8"
            ></motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 2 }}
              className="w-full max-x-xl lg:w-3/6"
            >
              <p className="mb-4 text-justify text-neutral-300">
                {expreience.descriptions}
              </p>
              {expreience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 mt-4 mr-2 text-purple-300 rounded bg-neutral-950"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
