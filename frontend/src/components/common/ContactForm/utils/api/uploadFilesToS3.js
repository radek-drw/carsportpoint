import axios from "axios";
import { sanitizeFileName } from "../helpers/sanitizeFileName";

const S3_UPLOAD_URL =
  "https://76dy56vmwa.execute-api.eu-west-1.amazonaws.com/uploadFilesToS3";

export const uploadFilesToS3 = async (files) => {
  const formData = new FormData();

  files.forEach((file) => {
    const sanitizedName = sanitizeFileName(file.name);
    const sanitizedFile = new File([file], sanitizedName, {
      type: file.type,
    });
    formData.append("files", sanitizedFile);
  });

  const fileUploadRes = await axios.post(S3_UPLOAD_URL, formData);

  return fileUploadRes.data.urls.map((url, index) => ({
    url,
    name: sanitizeFileName(files[index].name),
    size: files[index].size,
  }));
};
