import React from "react";
import MessageField from "./MessageField";

const MessageSection = ({
  messageFieldRows,
  messageLabel,
  messagePlaceholder,
}) => {
  return (
    <MessageField
      label={messageLabel}
      name="description"
      rows={messageFieldRows}
      placeholder={messagePlaceholder}
    />
  );
};

export default MessageSection;
