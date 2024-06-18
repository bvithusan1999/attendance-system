import { getUsers } from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "MERN";

export const login = async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find((u) => u.username === username);

  if (user) {
    if (password === user.password) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials one" });
    }
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
