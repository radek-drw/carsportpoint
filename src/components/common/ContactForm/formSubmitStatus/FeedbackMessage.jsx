import { motion } from "framer-motion";
import { HiCheckCircle, HiExclamationCircle, HiX } from "react-icons/hi";

const iconMap = {
  success: HiCheckCircle,
  error: HiExclamationCircle,
};

const stylesMap = {
  success: {
    container: "bg-green-100 text-green-800",
    icon: "text-green-600",
    close: "text-green-800 hover:text-green-900",
    role: "status",
    ariaLive: "polite",
  },
  error: {
    container: "bg-red-100 text-red-800",
    icon: "text-red-600",
    close: "text-red-800 hover:text-red-900",
    role: "alert",
    ariaLive: "assertive",
  },
};

const FeedbackMessage = ({ type = "success", message, onClose }) => {
  if (!message) return null;

  const Icon = iconMap[type];
  const styles = stylesMap[type];

  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role={styles.role}
      aria-live={styles.ariaLive}
      className={`absolute mt-4 flex items-start gap-3 rounded-md px-4 py-3 text-sm shadow ${styles.container}`}
    >
      <Icon className={`mt-0.5 text-xl ${styles.icon}`} />
      <span className="mr-6">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className={`absolute right-2 top-2 ${styles.close}`}
        aria-label="Close message"
      >
        <HiX />
      </button>
    </motion.div>
  );
};

export default FeedbackMessage;
