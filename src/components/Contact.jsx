import { CONTACT } from "../data/cn";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        聯絡方式
      </motion.h2>
      <div className="text-center">
        <motion.span
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center"
        >
          <IoMail className="mr-2 text-2xl" />
          {CONTACT.email}
        </motion.span>
        <motion.span
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center"
        >
          <FaPhone className="mr-2 text-2xl" />
          {CONTACT.phoneNo}
        </motion.span>
      </div>
    </div>
  );
};

export default Contact;
