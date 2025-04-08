import { motion } from "framer-motion";
import { HiExclamationCircle, HiX } from "react-icons/hi";

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <motion.div
      key="error"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role="status"
      aria-live="polite"
      className="absolute mt-4 flex items-start gap-3 rounded-md bg-red-100 px-4 py-3 text-sm text-red-800 shadow"
    >
      <HiExclamationCircle className="mt-0.5 text-xl text-red-600" />
      <span className="mr-6">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 top-2 text-red-800 hover:text-red-900"
        aria-label="Close error message"
      >
        <HiX />
      </button>
    </motion.div>
  );
};

export default ErrorMessage;
