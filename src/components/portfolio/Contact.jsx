import { CONTACT } from "../../data/cn";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-4 border-b border-neutral-800">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-4xl text-center"
      >
        聯絡方式
      </motion.h2>
      <div className="text-center">
        <motion.span
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center my-4"
        >
          <IoMail className="mr-2 text-2xl" />
          {CONTACT.email}
        </motion.span>
        <motion.span
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center my-4"
        >
          <FaPhone className="mr-2 text-2xl" />
          {CONTACT.phoneNo}
        </motion.span>
      </div>
    </div>
  );
};

export default Contact;
