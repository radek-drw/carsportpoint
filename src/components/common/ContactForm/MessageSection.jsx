import React from "react";
import MessageField from "./MessageField";

const MessageSection = () => {
  return (
    <MessageField
      label="Company Information *"
      name="description"
      rows={9}
      placeholder="Please provide some information about your company: opening hours, address, contact details, and any other important info"
    />
  );
};

export default MessageSection;
