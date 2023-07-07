import connectMongo from "../../../database/conn";
import { getUsers, postUser, putUser } from "../../../database/controller";

export default function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error Inside the connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;

    case "PUT":
      putUser(req, res);
      break;

    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
