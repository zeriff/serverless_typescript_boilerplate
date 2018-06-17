import { Handler, Context, Callback } from "aws-lambda";
import Logger from "./src/Logger";

let _logger = new Logger();
interface HelloResponse {
  statusCode: number;
  body: string;
}

const webhook: Handler = (event: any, context: Context, callback: Callback) => {
  _logger.log("This is message");
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10)
    })
  };

  callback(undefined, response);
};

export { webhook };
