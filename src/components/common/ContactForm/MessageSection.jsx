import React from "react";
import MessageField from "./MessageField";

const MessageSection = ({
  messageFieldRows,
  messageLabel,
  messagePlaceholder,
  errors,
  touched,
}) => {
  return (
    <MessageField
      label={messageLabel}
      name="description"
      rows={messageFieldRows}
      placeholder={messagePlaceholder}
      errors={errors}
      touched={touched}
    />
  );
};

export default MessageSection;
