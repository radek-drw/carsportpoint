import React from "react";
import { ErrorMessage } from "formik";
import { FaInfoCircle } from "react-icons/fa";
import { SUPPORTED_FORMATS } from "../utils/validators/validationSchema";

const FileUploadField = ({
  label,
  name,
  files,
  setFieldValue,
  maxFilesCount,
  maxFileSize,
}) => {
  const errorId = `${name}-error`;
  const descriptionId = `${name}-description`;

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.currentTarget.files);
    const newFiles = [...files, ...selectedFiles].slice(0, maxFilesCount);
    setFieldValue(name, newFiles);
    event.target.value = "";
  };

  const handleFileRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFieldValue(name, updatedFiles);
  };

  return (
    <div className="mb-input-gap">
      <label
        htmlFor={name}
        className={`btn block w-full text-center ${files.length >= maxFilesCount ? "cursor-not-allowed bg-gray-300" : "blue-btn cursor-pointer"}`}
      >
        {files.length >= maxFilesCount ? "File Limit Reached" : label}
        <input
          id={name}
          type="file"
          name={name}
          multiple
          disabled={files.length >= maxFilesCount}
          onChange={handleFileChange}
          className="hidden"
          accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
          aria-labelledby={name}
          aria-describedby={`${descriptionId} ${errorId}`}
          aria-disabled={files.length >= maxFilesCount}
        />
      </label>
      <span className="text-sm text-gray-500" id={descriptionId}>
        You can upload up to {maxFilesCount} files. Each file must be less than{" "}
        {maxFileSize}MB
      </span>
      <ErrorMessage
        name={name}
        component="div"
        id={errorId}
        className="mt-1 text-sm text-red-500"
      />
      {files.length > 0 && (
        <ul className="mt-4">
          {files.map((file, index) => {
            const isInvalidFileType = !SUPPORTED_FORMATS.includes(file.type);
            const isInvalidFileSize = file.size / (1024 * 1024) > maxFileSize;
            return (
              <li
                key={`${file.name}-${file.size}-${index}`}
                className="mb-2 flex items-center justify-between rounded-md bg-gray-100 p-2"
              >
                <div className="flex w-3/4 flex-col">
                  <span
                    className={`truncate text-sm ${isInvalidFileType || isInvalidFileSize ? "text-gray-500 line-through" : "text-green-500"}`}
                  >
                    {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                  {isInvalidFileType && (
                    <span className="flex items-center text-xs text-red-500">
                      Unsupported file type.
                      <span className="group relative ml-2">
                        <FaInfoCircle
                          className="duration-default cursor-pointer text-base text-blue-500 group-hover:text-blue-700"
                          aria-label={
                            "Supported formats are: jpg, jpeg, png, gif, pdf, doc, docx, txt"
                          }
                        />
                        <span
                          role="tooltip"
                          aria-hidden="true"
                          className="duration-default absolute left-0 z-10 mt-2 hidden whitespace-nowrap rounded-lg bg-gray-800 p-3 text-xs text-white shadow-lg transition-opacity ease-in-out group-hover:block"
                        >
                          <strong>Supported formats: </strong>
                          JPG, JPEG, PNG, GIF, PDF, DOC, DOCX, TXT
                        </span>
                      </span>
                    </span>
                  )}
                  {isInvalidFileSize && (
                    <span className="text-xs text-red-500">
                      File size exceeds {maxFileSize}MB. Please upload a smaller
                      file.
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleFileRemove(index)}
                  className="duration-default text-sm font-bold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FileUploadField;
