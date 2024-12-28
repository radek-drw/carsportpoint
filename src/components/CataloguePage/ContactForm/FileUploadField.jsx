import React from "react";
import { ErrorMessage } from "formik";
import { FaInfoCircle } from "react-icons/fa";

const FileUploadField = ({
  label,
  name,
  files,
  onChange,
  onRemove,
  maxFiles,
  maxFileSize,
  supportedFormats,
}) => {
  return (
    <div className="mb-8">
      <label
        className={`block w-full rounded px-4 py-2 text-center text-white ${files.length >= maxFiles ? "cursor-not-allowed bg-gray-300" : "duration-default cursor-pointer bg-blue-500 hover:bg-blue-700"}`}
      >
        {files.length >= maxFiles ? "File Limit Reached" : label}
        <input
          type="file"
          name={name}
          multiple
          disabled={files.length >= maxFiles}
          onChange={onChange}
          className="hidden"
          accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
        />
      </label>
      <span className="text-sm text-gray-500">
        You can upload up to {maxFiles} files. Each file must be less than{" "}
        {(maxFileSize / (1024 * 1024)).toFixed()}MB
      </span>
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm font-bold text-red-500"
      />
      {files.length > 0 && (
        <ul className="mt-4">
          {files.map((file, index) => {
            const isInvalidFileType = !supportedFormats.includes(file.type);
            const isInvalidFileSize = file.size > maxFileSize;
            return (
              <li
                key={index}
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
                          aria-label="Supported file types"
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
                      File size exceeds{" "}
                      {(maxFileSize / (1024 * 1024)).toFixed()}MB. Please upload
                      a smaller file.
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(index)}
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
