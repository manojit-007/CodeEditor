import axios from "axios";
import { LANGUAGES_VERSION } from "./constants.js";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGES_VERSION[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};