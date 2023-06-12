import main from "../../database/connection";
import Kitten from "../../database/schema";

export default async function get_Users(req, res) {
  main().catch((error) => console.error(error));

  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ method: "GET", endpoint: "Users" });
      break;
    case "POST":
      res.status(200).json({ method: "POST", endpoint: "Users" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Alllowed`);
      break;
  }
}
