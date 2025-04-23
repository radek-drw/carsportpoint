export const showMessage = (
  setMessage,
  messageRef,
  text,
  delay = 100,
  duration = 5000,
) => {
  setMessage("");
  clearTimeout(messageRef.current);

  setTimeout(() => {
    setMessage(text);
  }, delay);

  messageRef.current = setTimeout(() => {
    setMessage("");
  }, duration);
};
