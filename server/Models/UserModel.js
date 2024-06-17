import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userFilePath = path.resolve(__dirname, "../users.json");
// console.log("User file path:", userFilePath);

export const getUsers = () => {
  const data = fs.readFileSync(userFilePath);
  return JSON.parse(data);
};
