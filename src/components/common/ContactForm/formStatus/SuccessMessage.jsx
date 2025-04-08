import { motion } from "framer-motion";
import { HiCheckCircle, HiX } from "react-icons/hi";

const SuccessMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role="status"
      aria-live="polite"
      className="absolute mt-4 flex items-start gap-3 rounded-md bg-green-100 px-4 py-3 text-sm text-green-800 shadow"
    >
      <HiCheckCircle className="mt-0.5 text-xl text-green-600" />
      <span className="mr-6">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 top-2 text-green-800 hover:text-green-900"
        aria-label="Close success message"
      >
        <HiX />
      </button>
    </motion.div>
  );
};

export default SuccessMessage;
