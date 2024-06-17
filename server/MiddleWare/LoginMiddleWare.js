import bodyParser from "body-parser";

const loginMiddleware = [bodyParser.json()];

export default loginMiddleware;
