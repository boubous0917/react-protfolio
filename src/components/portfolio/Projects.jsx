import { React, useState } from "react";
import { PROJECTS } from "../../data/cn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-4 border-b border-neutral-800">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center"
      >
        專案作品
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded-full bg-opacity-80 bg-slate-100 "
                src={project.image}
                width={150}
                height={150}
                onClick={() => {
                  navigate(`${project.dir}`);
                }}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-300">{project.descriptions}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 mt-4 mr-2 text-purple-300 rounded bg-neutral-950"
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

export default Projects;
