import React from "react";
import FileUploadField from "./FileUploadField";
import {
  MAX_FILES,
  MAX_FILE_SIZE,
  SUPPORTED_FORMATS,
} from "./validationSchema";

const FileUploadSection = ({ values, setFieldValue }) => {
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.currentTarget.files);
    const newFiles = [...values.files, ...selectedFiles].slice(0, MAX_FILES);
    setFieldValue("files", newFiles);
    event.target.value = "";
  };

  const handleFileRemove = (index) => {
    const updatedFiles = values.files.filter((_, i) => i !== index);
    setFieldValue("files", updatedFiles);
  };

  return (
    <FileUploadField
      label="Upload Files"
      name="files"
      files={values.files}
      onChange={handleFileChange}
      onRemove={handleFileRemove}
      maxFiles={MAX_FILES}
      maxFileSize={MAX_FILE_SIZE}
      supportedFormats={SUPPORTED_FORMATS}
    />
  );
};

export default FileUploadSection;
